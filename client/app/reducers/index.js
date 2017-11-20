import { createStore, applyMiddleware } from 'redux';
import logger, { createLogger } from 'redux-logger';
import authenticationActions from './authentication';

const loggerMiddleware = createLogger();

export default createStore(authenticationActions, applyMiddleware(loggerMiddleware));
