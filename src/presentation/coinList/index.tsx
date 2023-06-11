import React, { useEffect } from 'react';
import { Repository } from 'src/domain/repository';
import { Coin } from 'src/presentation/coin';
import { useWSModelController } from '../hook';
import { CoinListWrapper } from './coinList.styles';

export const CoinList: React.FC<{ repository: Repository }> = ({
  repository,
}) => {
  const { currentCoins, handleSetupWS } = useWSModelController(repository);

  useEffect(() => {
    handleSetupWS(repository);
  }, []);

  return (
    <CoinListWrapper>
      {currentCoins?.map((coin: any, index: number) => {
        return <Coin coinData={coin} key={index} />;
      })}
    </CoinListWrapper>
  );
};
