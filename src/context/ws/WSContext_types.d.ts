/**
 * Filter Context
 *
 *
 * @property {Function} clearAllFilter - A method that can clear all the filters
 
 */

import { coinList } from 'src/domain/model';

export type Context = {
  val: coinList;
  [x: string]: any;
};
