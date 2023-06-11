import type { Repository } from '../repository';

export async function subscribeToAllMarketTickers(socket: any) {
  await socket?.send(
    JSON.stringify({ method: 'SUBSCRIBE', params: ['!ticker@arr'], id: 1 })
  );
}

export async function setupWS(repository: Repository, setCurrentCoins: any) {
  const socket = new WebSocket('wss://fstream.binance.com/ws');

  socket.onopen = () => {
    console.log('WebSocket connection opened.');
    subscribeToAllMarketTickers(socket);
  };
  socket.onclose = (event) => {
    console.log('Connection WebSocket close:', event);
  };
  socket.onerror = (error) => {
    console.error('WebSocket connection error:', error);
  };
  socket.onmessage = async (event) => {
    const msg = parseRawWsMessage(event);

    if (Array.isArray(msg)) {
      await repository.setCurrentCoins(msg);
      setCurrentCoins(msg);
    }
    return false;
  };
}
const parseRawWsMessage: any = (event: any) => {
  if (typeof event === 'string') {
    const parsedEvent = JSON.parse(event);

    if (parsedEvent.data) {
      if (typeof parsedEvent.data === 'string') {
        return parseRawWsMessage(parsedEvent.data);
      }
      return parsedEvent.data;
    }
  }
  if (event?.data) {
    return JSON.parse(event.data);
  }
  return event;
};
