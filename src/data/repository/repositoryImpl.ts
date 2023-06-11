import { coinList } from 'src/domain/model';
import type { Repository } from '../../domain/repository';
import type { DataSource } from '../dataSource';

export class RepositoryImpl implements Repository {
  dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  async getCurrentCoins(): Promise<coinList> {
    const [history] = await Promise.all([this.dataSource.getHistory()]);

    return history;
  }
}
