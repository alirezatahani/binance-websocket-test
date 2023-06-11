import React from 'react';
import { createRoot } from 'react-dom/client';
import { CoinList } from './components';

const App: React.FC = () => {
  return (
    <div>
      <CoinList />
    </div>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
