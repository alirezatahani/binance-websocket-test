import { coinList } from '../../domain/model';
import { history } from '../../domain/model';

/**
 * DataSource access interface
 * Assuming network access, all methods are asynchronous.
 */
export interface DataSource {
  setHistory(history: history): Promise<void>;
  getHistory(): Promise<history>;
}
