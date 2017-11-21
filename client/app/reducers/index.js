import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import authenticationActions from './authentication';

const loggerMiddleware = createLogger();

export default createStore(authenticationActions, applyMiddleware(promiseMiddleware(), loggerMiddleware));
