import React from 'react';
import { coin } from 'src/domain/model';
import {
  CoinWrapper,
  CoinPriceWrapper,
  CoinNameWrapper,
  CoinName,
  CoinPrice,
  CoinChanges,
  CoinDesc,
} from './coin.styles';

export const Coin: React.FC<{ coinData: coin }> = ({ coinData }) => {
  return (
    <CoinWrapper>
      <CoinNameWrapper>
        <CoinName>{coinData.s}</CoinName>
        <CoinDesc>Perpetual</CoinDesc>
      </CoinNameWrapper>
      <CoinPriceWrapper>
        <CoinPrice>{coinData.c}</CoinPrice>
        <CoinChanges>{coinData.P}%</CoinChanges>
      </CoinPriceWrapper>
    </CoinWrapper>
  );
};
