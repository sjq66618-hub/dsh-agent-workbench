import { createMusicService } from './music-service.js';
import { createQqMusicProvider } from '../providers/qq-music-provider.js';
import { createNetdiskService } from './netdisk-service.js';
import { createBaiduNetdiskProvider } from '../providers/baidu-netdisk-provider.js';

export const VERSION = '0.3.0';

const providers = [
  { id: 'music', label: 'QQ 音乐', flag: 'musicEnabled' },
  { id: 'netdisk', label: '百度网盘', flag: 'netdiskEnabled' },
];

export function createMediaService(config = {}) {
  const enabled = Object.fromEntries(providers.map(({ id, flag }) => {
    if (config[flag] !== undefined && typeof config[flag] !== 'boolean') {
      throw new TypeError(`${flag} must be a boolean`);
    }
    return [id, config[flag] !== false];
  }));
  if (config.musicBackend !== undefined && !['none', 'qqmusic'].includes(config.musicBackend)) throw new TypeError('musicBackend must be none or qqmusic');
  if (config.netdiskBackend !== undefined && !['none', 'baidu'].includes(config.netdiskBackend)) throw new TypeError('netdiskBackend must be none or baidu');
  const netdisk = createNetdiskService({ enabled: enabled.netdisk, provider: config.netdiskProvider ?? (enabled.netdisk && config.netdiskBackend === 'baidu' ? createBaiduNetdiskProvider() : undefined) });
  const music = createMusicService({
    provider: config.musicProvider ?? (enabled.music && config.musicBackend === 'qqmusic' ? createQqMusicProvider() : undefined),
    enabled: enabled.music,
    now: config.now,
    leaseTtlMs: config.musicLeaseTtlMs,
    maxQueue: config.musicMaxQueue,
  });
  let disposed = false;

  return Object.freeze({
    status() {
      if (disposed) {
        const error = new Error('Media service is stopped');
        error.code = 'SERVICE_STOPPED';
        throw error;
      }
      return {
        schemaVersion: 1,
        phase: 'P1.1',
        version: VERSION,
        operationsEnabled: enabled.music === true && ['ready', 'configured'].includes(music.status().state),
        providers: providers.map(({ id, label }) => ({
          id,
          label,
          enabled: enabled[id],
          ...(id === 'netdisk' ? netdisk.status() : enabled[id] ? music.status() : {
            state: enabled[id] ? 'not_connected' : 'disabled',
            accountState: 'not_checked',
          }),
        })),
      };
    },
    music,
    netdisk,
    dispose() {
      if (disposed) return;
      disposed = true;
      music.dispose();
      netdisk.dispose();
    },
  });
}
