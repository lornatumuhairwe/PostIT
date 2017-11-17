import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import todos from './reducers/todos';

export default createStore(
  todos,
  applyMiddleware(logger)
);

const app_store = {
    
}