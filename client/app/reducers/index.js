import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { loading, authentication } from './authentication';
import { groups } from './group';
import { getActiveGroup } from './activeGroup';

const loggerMiddleware = createLogger();

const authenticationActions = combineReducers({
  loading,
  userAuth: authentication,
  groups,
  activeGroup: getActiveGroup,
});

export default createStore(
  authenticationActions,
  applyMiddleware(
    thunk,
    promiseMiddleware(),
    loggerMiddleware
  )
);
