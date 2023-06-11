import type { Repository } from '../../domain/repository';
import type { DataSource } from '../dataSource';
import { coinList, history } from '../../domain/model';

export class RepositoryImpl implements Repository {
  dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  getCurrentCoins: () => Promise<history> = async () => {
    const [history] = await Promise.all([this.dataSource.getHistory()]);

    return history;
  };
  setCurrentCoins: (coins: coinList) => Promise<void> = async (
    coins: coinList
  ) => {
    await this.dataSource.setHistory([]);
    const history = await this.dataSource.getHistory();
    history?.push(...coins);

    await this.dataSource.setHistory(history);
  };
}
