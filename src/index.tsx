import React from 'react';
import { createRoot } from 'react-dom/client';

const App: React.FC = () => {
  return <div>Hello</div>;
};

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
