import React, { useContext, useEffect } from 'react';
import { CoinList } from '../presentation';
import { WebsocketContext } from '../context/ws';
import { WebsocketProvider } from '../context/ws';
import { OnMemoryDataSourceImpl, RepositoryImpl } from 'src/data';

// Dependency injection
const dataSource = new OnMemoryDataSourceImpl();
const repository = new RepositoryImpl(dataSource);

console.log(repository, 'repository');

export const App: React.FC = () => {
  const { isReady, val, subscribeToAllMarketTickers } =
    useContext(WebsocketContext);

  useEffect(() => {
    if (isReady) {
      subscribeToAllMarketTickers();
    }
  }, [isReady]);

  return (
    <CoinList coins={val} />
    // <WebsocketProvider>
    //   <div>
    //     {/* @ts-ignore */}
    //     <CoinList coins={val} />
    //   </div>
    // </WebsocketProvider>
  );
};
