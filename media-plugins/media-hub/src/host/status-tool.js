const providerSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['id', 'label', 'enabled', 'state', 'accountState'],
  properties: {
    id: { type: 'string', enum: ['music', 'netdisk'] },
    label: { type: 'string' },
    enabled: { type: 'boolean' },
    state: { type: 'string', enum: ['not_connected', 'disabled'] },
    accountState: { type: 'string', enum: ['not_checked'] },
  },
};

export function createStatusTool(readStatus) {
  return {
    name: 'media_hub_status',
    description: 'Read the local QQ Music and Baidu Netdisk integration status. P0 only: no account access, playback, transfers, filesystem reads, or network requests.',
    parameters: { type: 'object', properties: {}, additionalProperties: false },
    output: {
      schema: {
        type: 'object',
        additionalProperties: false,
        required: ['schemaVersion', 'phase', 'version', 'operationsEnabled', 'providers'],
        properties: {
          schemaVersion: { type: 'integer', enum: [1] },
          phase: { type: 'string', enum: ['P0'] },
          version: { type: 'string' },
          operationsEnabled: { type: 'boolean', enum: [false] },
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
