import type { coinList } from '../model';

export interface Repository {
  getCurrentCoins(): Promise<coinList>;
}
