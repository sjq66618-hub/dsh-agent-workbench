export const VERSION = '0.1.0';

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
        phase: 'P0',
        version: VERSION,
        operationsEnabled: false,
        providers: providers.map(({ id, label }) => ({
          id,
          label,
          enabled: enabled[id],
          state: enabled[id] ? 'not_connected' : 'disabled',
          accountState: 'not_checked',
        })),
      };
    },
    dispose() { disposed = true; },
  });
}
