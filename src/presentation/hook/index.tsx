import { useState, useEffect } from 'react';
import { coinList } from 'src/domain/model';
import type { Repository } from '../../domain/repository';
import { setupWS } from 'src/domain/repository/useCase';

export function useWSModelController(repository: Repository) {
  const [currentCoins, setCurrentCoins] = useState<coinList | null>([]);

  useEffect(() => {
    async function init() {
      const initialStep = await repository.getCurrentCoins();

      setCurrentCoins(initialStep);
    }
    init();
  }, [currentCoins]);

  const handleSetupWS = async (repo: Repository) => {
    await setupWS(repo, setCurrentCoins);
    const currentCoins = await repository.getCurrentCoins();

    setCurrentCoins(currentCoins);
  };

  return {
    currentCoins,
    handleSetupWS,
  };
}
