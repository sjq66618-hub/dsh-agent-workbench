#!/usr/bin/env node
/**
 * DSH ⇄ Codex bridge
 *
 * 一个零依赖的 stdio MCP server，把本机 `codex exec` 暴露成 DSH 工具。
 * 单并发队列：Codex CLI 共享 app-server 状态，不接受并发调用。
 *
 * 工具：
 *   codex_exec   —— 非交互跑 Codex（prompt 走 stdin，不拼接命令行）
 *   codex_health —— 探活：版本 / 可执行文件 / 上次调用结果
 */

import { spawn } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { randomUUID } from 'node:crypto';
import readline from 'node:readline';

const SERVER = { name: 'codex-bridge', version: '1.0.0' };
const PROTOCOL_FALLBACK = '2025-06-18';
const DEFAULT_CWD = process.env.CODEX_BRIDGE_CWD || process.cwd();
const DEFAULT_TIMEOUT_MS = Number(process.env.CODEX_BRIDGE_TIMEOUT_MS || 900000);
const MAX_TEXT = Number(process.env.CODEX_BRIDGE_MAX_TEXT || 60000);

const state = { lastRun: null, running: false };

/* ---------------------------------------------------------------- codex bin */

function resolveCodex() {
  const winVendor = 'node_modules/@openai/codex/node_modules/@openai/codex-win32-x64/vendor/x86_64-pc-windows-msvc/bin/codex.exe';
  const candidates = [
    process.env.CODEX_BIN,
    join(process.env.USERPROFILE || '', '.npm-global', winVendor),
    join(process.env.APPDATA || '', 'npm', winVendor),
    join(process.env.LOCALAPPDATA || '', 'OpenAI', 'Codex', 'bin', 'codex.exe'),
  ].filter(Boolean);
  for (const c of candidates) {
    if (existsSync(c)) return { cmd: c, prefix: [], source: c };
  }
  return { cmd: 'cmd.exe', prefix: ['/d', '/s', '/c', 'codex'], source: 'PATH (cmd /c codex)' };
}

/* ------------------------------------------------------------------- helpers */

function truncate(text, limit = MAX_TEXT) {
  if (typeof text !== 'string') return '';
  if (text.length <= limit) return text;
  return `${text.slice(0, limit)}\n\n…[截断 ${text.length - limit} 字符]`;
}

function summarizeEvents(lines) {
  const out = { threadId: null, messages: [], commands: [], errors: [], usage: null };
  for (const line of lines) {
    let evt;
    try {
      evt = JSON.parse(line);
    } catch {
      continue;
    }
    if (evt.type === 'thread.started' && evt.thread_id) out.threadId = evt.thread_id;
    if (evt.type === 'turn.completed' && evt.usage) out.usage = evt.usage;
    const item = evt.item;
    if (!item || evt.type !== 'item.completed') continue;
    if (item.type === 'agent_message' && item.text) out.messages.push(item.text);
    else if (item.type === 'command_execution') {
      const code = item.exit_code ?? item.exitCode;
      out.commands.push(`[exit ${code ?? '?'}] ${String(item.command || '').slice(0, 300)}`);
    } else if (item.type === 'error' && item.message) out.errors.push(item.message);
  }
  return out;
}

function buildArgs({ sandbox, model, profile, cwd, addDirs, lastMessageFile }) {
  const args = ['exec', '--json', '--skip-git-repo-check', '--output-last-message', lastMessageFile];
  if (cwd) args.push('--cd', cwd);
  if (sandbox) args.push('--sandbox', sandbox);
  if (model) args.push('--model', model);
  if (profile) args.push('--profile', profile);
  for (const d of addDirs || []) args.push('--add-dir', d);
  args.push('-'); // prompt 来自 stdin
  return args;
}

/* --------------------------------------------------------------- the runner */

let queue = Promise.resolve();

function runCodex(opts) {
  const task = () => new Promise((resolve) => {
    const { cmd, prefix, source } = resolveCodex();
    const cwd = opts.cwd || DEFAULT_CWD;
    const timeoutMs = Math.min(Math.max(Number(opts.timeoutMs) || DEFAULT_TIMEOUT_MS, 5000), 3600000);
    const started = Date.now();
    const tmpDir = mkdtempSync(join(tmpdir(), 'dsh-codex-'));
    const lastFile = join(tmpDir, 'last-message.txt');
    const args = buildArgs({ ...opts, cwd, lastMessageFile: lastFile });

    state.running = true;
    let child;
    try {
      child = spawn(cmd, [...prefix, ...args], {
        cwd,
        stdio: ['pipe', 'pipe', 'pipe'],
        windowsHide: true,
        windowsVerbatimArguments: false,
      });
    } catch (err) {
      state.running = false;
      resolve({ ok: false, error: `spawn failed: ${err.message}`, source });
      return;
    }

    const stdoutLines = [];
    const stderrChunks = [];
    let killedByTimeout = false;
    const timer = setTimeout(() => {
      killedByTimeout = true;
      try { child.kill('SIGKILL'); } catch { /* ignore */ }
    }, timeoutMs);

    readline.createInterface({ input: child.stdout }).on('line', (line) => {
      stdoutLines.push(line);
    });
    child.stderr.on('data', (buf) => {
      stderrChunks.push(buf.toString('utf8'));
      if (stderrChunks.join('').length > 20000) stderrChunks.shift();
    });

    child.on('error', (err) => {
      clearTimeout(timer);
      state.running = false;
      resolve({ ok: false, error: `codex error: ${err.message}`, source, cwd });
    });

    child.on('close', (code) => {
      clearTimeout(timer);
      state.running = false;

      let finalMessage = '';
      try {
        if (existsSync(lastFile)) finalMessage = readFileSync(lastFile, 'utf8').trim();
      } catch { /* ignore */ }
      const summary = summarizeEvents(stdoutLines);
      if (!finalMessage) finalMessage = summary.messages.join('\n\n').trim();
      try { rmSync(tmpDir, { recursive: true, force: true }); } catch { /* ignore */ }

      const durationSec = ((Date.now() - started) / 1000).toFixed(1);
      const usage = summary.usage
        ? `tokens in=${summary.usage.input_tokens ?? '?'} out=${summary.usage.output_tokens ?? '?'}`
        : 'tokens unknown';
      const stderrText = stderrChunks.join('').trim();

      const result = {
        ok: code !== 0 ? false : Boolean(finalMessage) || summary.errors.length === 0,
        exitCode: code,
        killedByTimeout,
        finalMessage,
        commands: summary.commands,
        errors: summary.errors,
        usage,
        durationSec,
        threadId: summary.threadId,
        stderr: stderrText,
        cwd,
        source,
      };
      state.lastRun = {
        at: new Date().toISOString(),
        ok: result.ok,
        durationSec,
        threadId: result.threadId,
        exitCode: code,
        timeout: killedByTimeout,
        promptPreview: String(opts.prompt || '').slice(0, 120),
      };
      resolve(result);
    });

    child.stdin.on('error', () => { /* codex 可能提前关闭管道 */ });
    child.stdin.write(opts.prompt ?? '');
    child.stdin.end();
  });

  const p = queue.then(task);
  queue = p.catch(() => {});
  return p;
}

function formatResult(r) {
  if (r.error) return `❌ codex 调用失败\n${r.error}\nsource: ${r.source ?? '?'}`;
  const head = r.ok ? '✅ codex' : '⚠️ codex 异常退出';
  const parts = [
    `${head} · exit=${r.exitCode} · ${r.durationSec}s · ${r.usage}${r.killedByTimeout ? ' · 已超时强杀' : ''}`,
    r.threadId ? `thread: ${r.threadId}` : null,
    '',
    r.finalMessage || '（无最终消息）',
  ].filter((x) => x !== null);
  if (r.errors.length) parts.push('', '错误事件:', ...r.errors.slice(0, 10).map((e) => `- ${e}`));
  if (r.commands.length) {
    parts.push('', `执行过的命令（${r.commands.length}）:`, ...r.commands.slice(-20).map((c) => `- ${c}`));
  }
  if (!r.ok && r.stderr) parts.push('', 'stderr:', truncate(r.stderr, 3000));
  return truncate(parts.join('\n'));
}

/* ------------------------------------------------------------- MCP plumbing */

const TOOLS = [
  {
    name: 'codex_exec',
    description:
      '把一段任务交给本机 Codex CLI（GPT 系编码代理）非交互执行，返回它的最终答复，附带执行过的命令与 token 用量。' +
      '适合：需要第二意见的实现、跨文件重构、大批量机械修改、独立复核。' +
      'Codex 直接在 cwd 里读写文件，会真实改盘；prompt 要自包含（它看不到当前会话上下文）。' +
      '单并发：同一时刻只有一个 Codex 任务在跑，调用会排队。',
    inputSchema: {
      type: 'object',
      properties: {
        prompt: { type: 'string', description: '完整任务说明（自包含，含目标/约束/验收）' },
        cwd: { type: 'string', description: `工作目录，默认 ${DEFAULT_CWD}` },
        sandbox: {
          type: 'string',
          enum: ['read-only', 'workspace-write', 'danger-full-access'],
          description: 'Codex 沙箱模式；省略则用它自己的 config.toml 设置',
        },
        model: { type: 'string', description: '覆盖模型，如 gpt-6.1-sol' },
        profile: { type: 'string', description: 'Codex 配置 profile 名' },
        addDirs: { type: 'array', items: { type: 'string' }, description: '额外可写目录' },
        timeoutMs: { type: 'number', description: `超时毫秒，默认 ${DEFAULT_TIMEOUT_MS}` },
      },
      required: ['prompt'],
    },
  },
  {
    name: 'codex_health',
    description: 'Codex 桥接自检：可执行文件路径、是否正在跑、上一次调用结果。不消耗模型额度。',
    inputSchema: { type: 'object', properties: {} },
  },
];

function reply(id, result) {
  process.stdout.write(`${JSON.stringify({ jsonrpc: '2.0', id, result })}\n`);
}

function replyError(id, code, message) {
  process.stdout.write(`${JSON.stringify({ jsonrpc: '2.0', id, error: { code, message } })}\n`);
}

async function handleToolCall(id, name, args) {
  if (name === 'codex_exec') {
    const prompt = String(args?.prompt || '').trim();
    if (!prompt) {
      reply(id, { content: [{ type: 'text', text: '❌ prompt 为空' }], isError: true });
      return;
    }
    const r = await runCodex({
      prompt,
      cwd: args?.cwd,
      sandbox: args?.sandbox,
      model: args?.model,
      profile: args?.profile,
      addDirs: Array.isArray(args?.addDirs) ? args.addDirs : undefined,
      timeoutMs: args?.timeoutMs,
    });
    reply(id, { content: [{ type: 'text', text: formatResult(r) }], isError: !r.ok });
    return;
  }

  if (name === 'codex_health') {
    const { cmd, prefix, source } = resolveCodex();
    let version = 'unknown';
    if (!prefix.length) {
      version = await new Promise((resolve) => {
        const c = spawn(cmd, ['--version'], { windowsHide: true, stdio: ['ignore', 'pipe', 'ignore'] });
        let buf = '';
        c.stdout.on('data', (d) => { buf += d.toString(); });
        c.on('close', () => resolve(buf.trim() || 'unknown'));
        c.on('error', () => resolve('error'));
      });
    }
    const lines = [
      `exe: ${source}`,
      `version: ${version}`,
      `running: ${state.running}`,
      `default cwd: ${DEFAULT_CWD}`,
      `default timeout: ${DEFAULT_TIMEOUT_MS}ms`,
      `concurrency: 1 (串行队列)`,
      `last run: ${state.lastRun ? JSON.stringify(state.lastRun) : 'none'}`,
    ];
    reply(id, { content: [{ type: 'text', text: lines.join('\n') }] });
    return;
  }

  replyError(id, -32602, `unknown tool: ${name}`);
}

async function handle(msg) {
  const { id, method, params } = msg;
  if (method === 'initialize') {
    const pv = params?.protocolVersion || PROTOCOL_FALLBACK;
    reply(id, {
      protocolVersion: pv,
      capabilities: { tools: { listChanged: false } },
      serverInfo: SERVER,
    });
    return;
  }
  if (method === 'notifications/initialized' || method === 'initialized') return;
  if (method === 'ping') { reply(id, {}); return; }
  if (method === 'tools/list') { reply(id, { tools: TOOLS }); return; }
  if (method === 'tools/call') {
    await handleToolCall(id, params?.name, params?.arguments || {});
    return;
  }
  if (method?.startsWith('notifications/')) return;
  if (id !== undefined) replyError(id, -32601, `method not found: ${method}`);
}

const rl = readline.createInterface({ input: process.stdin });
rl.on('line', (line) => {
  const text = line.trim();
  if (!text) return;
  let msg;
  try {
    msg = JSON.parse(text);
  } catch {
    return;
  }
  if (Array.isArray(msg)) { msg.forEach((m) => handle(m)); return; }
  handle(msg).catch((err) => {
    if (msg?.id !== undefined) replyError(msg.id, -32603, String(err?.message || err));
  });
});
rl.on('close', () => process.exit(0));
process.on('unhandledRejection', (err) => process.stderr.write(`[codex-bridge] unhandled: ${err}\n`));
process.on('SIGTERM', () => process.exit(0));
