import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './main/app';
import { WebsocketProvider } from './context/ws';

const Index: React.FC = () => {
  return (
    <React.StrictMode>
      <WebsocketProvider>
        <App />
      </WebsocketProvider>
    </React.StrictMode>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<Index />);
