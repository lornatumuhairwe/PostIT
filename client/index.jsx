/* eslint-disable indent */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './app/components/app';
import store from './app/reducers/index';

const app = document.getElementById('app');
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
