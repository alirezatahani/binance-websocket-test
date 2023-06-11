import React from 'react';
import {
  CoinWrapper,
  CoinPriceWrapper,
  CoinNameWrapper,
  CoinName,
  CoinPrice,
  CoinChanges,
  CoinDesc,
} from './coin.styles';

export const Coin: React.FC = () => {
  return (
    <CoinWrapper>
      <CoinNameWrapper>
        <CoinName>BTCUSDT</CoinName>
        <CoinDesc>Perpetual</CoinDesc>
      </CoinNameWrapper>
      <CoinPriceWrapper>
        <CoinPrice>20,362.80</CoinPrice>
        <CoinChanges>+2.08%</CoinChanges>
      </CoinPriceWrapper>
    </CoinWrapper>
  );
};
