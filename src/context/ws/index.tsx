import React, { useEffect, useRef, useState, createContext } from 'react';
import { coinList } from 'src/domain/model';
import { Context } from './WSContext_types';

export const WebsocketContext = createContext<Partial<Context>>({});

export const WebsocketProvider = ({ children }: any) => {
  const [isReady, setIsReady] = useState(false);
  const [val, setVal] = useState<coinList>([]);

  const ws = useRef(null);

  useEffect(() => {
    const socket = new WebSocket('wss://fstream.binance.com/ws');

    socket.onopen = () => {
      console.log('WebSocket connection opened.');
      setIsReady(true);
    };
    socket.onclose = (event) => {
      console.log('Connection WebSocket close:', event);
      setIsReady(false);
    };
    socket.onerror = (error) => {
      console.error('WebSocket connection error:', error);
    };
    socket.onmessage = (event) => {
      console.log('Message parsed:', event);
      const msg = parseRawWsMessage(event);

      setVal(msg);
      return false;
    };

    ws.current = socket;

    return () => {
      socket.close();
    };
  }, []);

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
  const subscribeToAllMarketTickers = () => {
    ws.current?.send(
      JSON.stringify({ method: 'SUBSCRIBE', params: ['!ticker@arr'], id: 1 })
    );
  };

  const ret = {
    isReady,
    val,
    subscribeToAllMarketTickers,
  };

  return (
    <WebsocketContext.Provider value={ret}>
      {children}
    </WebsocketContext.Provider>
  );
};
