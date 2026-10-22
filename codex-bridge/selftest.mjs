#!/usr/bin/env node
/**
 * codex-bridge 自测客户端。
 *
 *   node selftest.mjs            # 协议 + codex_health，不烧模型额度
 *   node selftest.mjs --run "hi" # 额外跑一次真实 codex_exec
 */

import { spawn } from 'node:child_process';
import readline from 'node:readline';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const serverPath = join(here, 'mcp-codex-server.mjs');
const runPrompt = process.argv.includes('--run') ? process.argv[process.argv.indexOf('--run') + 1] : null;
const runSandbox = process.argv.includes('--sandbox') ? process.argv[process.argv.indexOf('--sandbox') + 1] : undefined;

const child = spawn(process.execPath, [serverPath], { stdio: ['pipe', 'pipe', 'inherit'] });
const pending = new Map();
const rl = readline.createInterface({ input: child.stdout });

rl.on('line', (line) => {
  let msg;
  try { msg = JSON.parse(line); } catch { return; }
  const entry = pending.get(msg.id);
  if (!entry) return;
  pending.delete(msg.id);
  entry(msg);
});

let seq = 0;
function call(method, params, timeoutMs = 30000) {
  const id = ++seq;
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      pending.delete(id);
      reject(new Error(`timeout: ${method}`));
    }, timeoutMs);
    pending.set(id, (msg) => {
      clearTimeout(timer);
      if (msg.error) reject(new Error(`${method}: ${JSON.stringify(msg.error)}`));
      else resolve(msg.result);
    });
    child.stdin.write(`${JSON.stringify({ jsonrpc: '2.0', id, method, params })}\n`);
  });
}

function notify(method, params) {
  child.stdin.write(`${JSON.stringify({ jsonrpc: '2.0', method, params })}\n`);
}

function ok(label, extra = '') {
  console.log(`✅ ${label}${extra ? ` — ${extra}` : ''}`);
}

try {
  const init = await call('initialize', { protocolVersion: '2025-06-18', capabilities: {}, clientInfo: { name: 'selftest', version: '1' } });
  ok('initialize', `${init.serverInfo?.name}@${init.serverInfo?.version} protocol=${init.protocolVersion}`);
  notify('notifications/initialized', {});

  const list = await call('tools/list', {});
  ok('tools/list', list.tools.map((t) => t.name).join(', '));

  const health = await call('tools/call', { name: 'codex_health', arguments: {} }, 60000);
  console.log('--- codex_health ---');
  console.log(health.content?.[0]?.text ?? '(empty)');

  if (runPrompt) {
    console.log('--- codex_exec (real run) ---');
    const res = await call('tools/call', { name: 'codex_exec', arguments: { prompt: runPrompt, sandbox: runSandbox, timeoutMs: 300000 } }, 320000);
    console.log(res.content?.[0]?.text ?? '(empty)');
    ok('codex_exec', `isError=${Boolean(res.isError)}`);
  }

  console.log('SELFTEST PASS');
  process.exitCode = 0;
} catch (err) {
  console.error(`SELFTEST FAIL: ${err.message}`);
  process.exitCode = 1;
} finally {
  child.stdin.end();
  setTimeout(() => child.kill(), 500);
}
