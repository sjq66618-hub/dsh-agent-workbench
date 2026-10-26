const trackSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['songMid', 'title', 'artist', 'album', 'durationMs'],
  properties: {
    songMid: { type: 'string' },
    title: { type: 'string' },
    artist: { type: 'string' },
    album: { type: 'string' },
    durationMs: { oneOf: [{ type: 'integer' }, { type: 'null' }] },
  },
};

const textOutput = (value) => [{ type: 'text', text: JSON.stringify(value, null, 2) }];

function tool({ name, description, parameters, output, execute }) {
  return {
    name,
    description,
    parameters,
    output: { schema: output, render: (_args, value) => textOutput(value) },
    isConcurrencySafe: name !== 'media_music_play',
    execute,
  };
}

export function createMusicTools(service) {
  return [
    tool({
      name: 'media_music_search',
      description: 'Search QQ Music through the configured provider. Results contain stable song ids and no credentials or playback URLs.',
      parameters: {
        type: 'object', additionalProperties: false, required: ['query'],
        properties: { query: { type: 'string' }, page: { type: 'integer' }, limit: { type: 'integer' } },
      },
      output: { type: 'object', additionalProperties: false, required: ['schemaVersion', 'query', 'page', 'limit', 'items', 'hasMore'], properties: { schemaVersion: { type: 'integer' }, query: { type: 'string' }, page: { type: 'integer' }, limit: { type: 'integer' }, items: { type: 'array', items: trackSchema }, hasMore: { type: 'boolean' } } },
      async execute(args = {}) { return service.search(args); },
    }),
    tool({
      name: 'media_music_details',
      description: 'Read one QQ Music track by stable song id.',
      parameters: { type: 'object', additionalProperties: false, required: ['songMid'], properties: { songMid: { type: 'string' } } },
      output: { type: 'object', additionalProperties: false, required: ['schemaVersion', 'track'], properties: { schemaVersion: { type: 'integer' }, track: trackSchema } },
      async execute(args = {}) { return service.details(args); },
    }),
    tool({
      name: 'media_music_lyrics',
      description: 'Read lyrics for one QQ Music track. Lyrics are returned only when the provider supplies them.',
      parameters: { type: 'object', additionalProperties: false, required: ['songMid'], properties: { songMid: { type: 'string' } } },
      output: { type: 'object', additionalProperties: false, required: ['schemaVersion', 'songMid', 'lyric', 'translatedLyric', 'hasLyric'], properties: { schemaVersion: { type: 'integer' }, songMid: { type: 'string' }, lyric: { type: 'string' }, translatedLyric: { oneOf: [{ type: 'string' }, { type: 'null' }] }, hasLyric: { type: 'boolean' } } },
      async execute(args = {}) { return service.lyrics(args); },
    }),
    tool({
      name: 'media_music_play',
      description: 'Resolve a short-lived, client-bound playback lease. The upstream URL is never returned to the agent.',
      parameters: { type: 'object', additionalProperties: false, required: ['songMid'], properties: { songMid: { type: 'string' }, clientId: { type: 'string' } } },
      output: { type: 'object', additionalProperties: false, required: ['schemaVersion', 'state', 'leaseId', 'streamPath', 'expiresAt', 'track'], properties: { schemaVersion: { type: 'integer' }, state: { type: 'string', enum: ['ready'] }, leaseId: { type: 'string' }, streamPath: { type: 'string' }, expiresAt: { type: 'integer' }, track: trackSchema } },
      async execute(args = {}) { return service.play({ ...args, clientId: args.clientId || 'agent' }); },
    }),
    tool({
      name: 'media_music_queue',
      description: 'Read or mutate the client-scoped QQ Music playback queue.',
      parameters: { type: 'object', additionalProperties: false, properties: { clientId: { type: 'string' }, action: { type: 'string', enum: ['get', 'add', 'next', 'clear'] }, track: trackSchema } },
      output: { type: 'object', additionalProperties: false, required: ['schemaVersion', 'clientId', 'items'], properties: { schemaVersion: { type: 'integer' }, clientId: { type: 'string' }, next: { oneOf: [trackSchema, { type: 'null' }] }, items: { type: 'array', items: trackSchema }, added: { type: 'boolean' } } },
      async execute(args = {}) { return service.queue({ ...args, clientId: args.clientId || 'agent' }); },
    }),
  ];
}
