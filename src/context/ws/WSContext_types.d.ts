/**
 * Filter Context
 *
 *
 * @property {Function} subscribeToAllMarketTickers - A method that subscribe to All Market Tickers Streams
 
 */

import { coinList } from 'src/domain/model';

export type Context = {
  val: coinList;
  isReady: boolean;
  subscribeToAllMarketTickers: () => void;
  [x: string]: any;
};
