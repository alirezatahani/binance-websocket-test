import type { coinList } from '../../domain/model';
import type { DataSource } from './dataSource';
import { history } from '../../domain/model';

export class OnMemoryDataSourceImpl implements DataSource {
  history: coinList = [];

  async setHistory(history: history): Promise<void> {
    this.history = history;
  }

  async getHistory(): Promise<history> {
    return this.history;
  }
}
