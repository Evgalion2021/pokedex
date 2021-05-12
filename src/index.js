import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { pokemonStoreFunction } from './store/mobxStore';
import Context from './context/Context';

const store = pokemonStoreFunction();

ReactDOM.render(
  <Context.Provider value={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>,
  document.getElementById('root'),
);
