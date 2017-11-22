import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import { loading, authentication } from './authentication';

const loggerMiddleware = createLogger();

const authenticationActions = combineReducers({
  loading,
  userAuth: authentication
});

export default createStore(
  authenticationActions,
  applyMiddleware(
    promiseMiddleware(),
    loggerMiddleware
  )
);
