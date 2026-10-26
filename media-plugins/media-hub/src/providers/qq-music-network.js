import { Agent } from 'node:https';

const pause = ms => new Promise(resolve => setTimeout(resolve, ms));

// The host's proxy/TUN can reset the TCP/TLS handshake. Track our own sockets so
// a reconnect can never replay an HTTP request that reached the authenticated peer.
export class QqAuthAgent extends Agent {
  #sockets = new WeakSet();
  #established = new WeakSet();
  createConnection(options, callback) {
    const socket = super.createConnection(options, callback);
    this.#sockets.add(socket);
    socket.once('secureConnect', () => this.#established.add(socket));
    return socket;
  }
  canReconnect(error) {
    const socket = error?.request?.socket;
    return ['ECONNRESET', 'ECONNABORTED', 'ETIMEDOUT'].includes(error?.code) && Boolean(socket) && this.#sockets.has(socket) && !this.#established.has(socket);
  }
}

export function createQqAuthTransport(transport, { agent = new QqAuthAgent(), wait = pause } = {}) {
  return {
    async request(config) {
      for (let attempt = 0; ; attempt++) {
        try { return await transport.request({ ...config, httpsAgent: agent }); }
        catch (error) {
          if (attempt >= 2 || !agent.canReconnect(error)) throw error;
          await wait(250 * (attempt + 1));
        }
      }
    },
  };
}

export function reconnectQqWebSocket(connect, { wait = pause } = {}) {
  return async (...args) => {
    for (let attempt = 0; ; attempt++) {
      try { return await connect(...args); }
      catch (error) {
        if (attempt >= 2 || error?.message !== 'MQTT handshake failed') throw error;
        await wait(250 * (attempt + 1));
      }
    }
  };
}
