import { coinList } from '../../domain/model';

/**
 * DataSource access interface
 * Assuming network access, all methods are asynchronous.
 */
export interface DataSource {
  setHistory(history: coinList): Promise<void>;
  getHistory(): Promise<coinList>;
}
