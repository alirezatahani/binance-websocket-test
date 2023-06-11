import { coinList, history } from '../../domain/model';

export interface Repository {
  getCurrentCoins(): Promise<history>;
  setCurrentCoins(coins: coinList): Promise<void>;
  dataSource?: any;
}
