import React from 'react';
import { Coin } from '@components/coin';
import { CoinListWrapper } from './coinList.styles';

export const CoinList: React.FC = () => {
  return (
    <CoinListWrapper>
      <Coin />
      <Coin />
      <Coin />
      <Coin />
      <Coin />
      <Coin />
    </CoinListWrapper>
  );
};
