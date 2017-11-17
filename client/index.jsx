/* eslint-disable indent */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './app/components/app';
import store from './app/store';

const app = document.getElementById('app');
console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$', store.getState());
ReactDOM.render(
    // setup react router
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
    app
);
