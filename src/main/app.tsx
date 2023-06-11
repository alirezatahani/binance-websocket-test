import React from 'react';
import { CoinList } from '../presentation';
import { OnMemoryDataSourceImpl, RepositoryImpl } from 'src/data';
import './style.css';

// Dependency injection
const dataSource = new OnMemoryDataSourceImpl();
const repository = new RepositoryImpl(dataSource);

export const App: React.FC = () => {
  return <CoinList repository={repository} />;
};
