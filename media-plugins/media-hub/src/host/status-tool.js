const providerSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['id', 'label', 'enabled', 'state', 'accountState'],
  properties: {
    id: { type: 'string', enum: ['music', 'netdisk'] },
    label: { type: 'string' },
    enabled: { type: 'boolean' },
    state: { type: 'string', enum: ['not_connected', 'disabled', 'unavailable', 'configured', 'ready'] },
    accountState: { type: 'string', enum: ['not_checked', 'signed_out', 'waiting', 'scanned', 'authenticated'] },
    runtimeState: { type: 'string', enum: ['idle', 'running', 'stopped'] },
    networkState: { type: 'string', enum: ['not_checked', 'verified', 'failed'] },
    lastFailure: { type: 'string', enum: ['none', 'spawn_error', 'worker_exit', 'request_timeout', 'provider_rejected', 'ipc_error'] },
    capabilities: {
      type: 'object', additionalProperties: false,
      properties: {
        search: { type: 'boolean' }, details: { type: 'boolean' }, lyrics: { type: 'boolean' }, playback: { type: 'boolean' }, queue: { type: 'boolean' },
        library: { type: 'boolean' }, browse: { type: 'boolean' }, searchFiles: { type: 'boolean' }, download: { type: 'boolean' },
      },
    },
  },
};

export function createStatusTool(readStatus) {
  return {
    name: 'media_hub_status',
    description: 'Read the local QQ Music and Baidu Netdisk integration status. P1 music operations use the configured provider and never return credentials or upstream playback URLs.',
    parameters: { type: 'object', properties: {}, additionalProperties: false },
    output: {
      schema: {
        type: 'object',
        additionalProperties: false,
        required: ['schemaVersion', 'phase', 'version', 'operationsEnabled', 'providers'],
        properties: {
          schemaVersion: { type: 'integer', enum: [1] },
          phase: { type: 'string', enum: ['P1.1'] },
          version: { type: 'string' },
          operationsEnabled: { type: 'boolean' },
          providers: { type: 'array', items: providerSchema },
        },
      },
      render: (_args, status) => [{ type: 'text', text: JSON.stringify(status, null, 2) }],
    },
    isConcurrencySafe: () => true,
    async execute(args = {}) {
      if (!args || typeof args !== 'object' || Array.isArray(args) || Object.keys(args).length) {
        throw new TypeError('media_hub_status accepts an empty object only');
      }
      return readStatus();
    },
  };
}
