import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import reportWebVitals from './reportWebVitals';
import { Game } from './components/Game';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <Game />
    </React.StrictMode>
  );

  reportWebVitals();