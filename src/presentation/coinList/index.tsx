import React from 'react';
import { coinList } from 'src/domain/model';
import { Coin } from 'src/presentation';
import { CoinListWrapper } from './coinList.styles';

export const CoinList: React.FC<{ coins: coinList }> = ({ coins }) => {
  return (
    <CoinListWrapper>
      {Array.isArray(coins) &&
        coins?.map((coin: any, index: number) => {
          return <Coin coinData={coin} key={index} />;
        })}
    </CoinListWrapper>
  );
};
