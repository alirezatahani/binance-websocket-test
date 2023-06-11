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
    <CoinWrapper key={coinData.s + coinData.c} sign={Number(coinData.P)}>
      <CoinNameWrapper>
        <CoinName>{coinData.s}</CoinName>
        <CoinDesc>Perpetual</CoinDesc>
      </CoinNameWrapper>
      <CoinPriceWrapper>
        <CoinPrice sign={Number(coinData.P)}>{coinData.c}</CoinPrice>
        <CoinChanges sign={Number(coinData.P)}>{coinData.P}%</CoinChanges>
      </CoinPriceWrapper>
    </CoinWrapper>
  );
};
