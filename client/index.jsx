/* eslint-disable indent */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { App } from './app/components/app';

const app = document.getElementById('app');
ReactDOM.render(
  (<BrowserRouter>
    <div>
      <App />
    </div>
  </BrowserRouter>),
    app
);
