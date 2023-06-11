import type { coinList } from '../../domain/model';
import type { DataSource } from './dataSource';

export class OnMemoryDataSourceImpl implements DataSource {
  history: coinList = [];

  async setHistory(history: coinList): Promise<void> {
    this.history = history;
  }

  async getHistory(): Promise<coinList> {
    return this.history;
  }
}
