import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { PokedexApp } from './PokedexApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PokedexApp/>
  </React.StrictMode>
);
