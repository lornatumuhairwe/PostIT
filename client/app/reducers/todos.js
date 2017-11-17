import Immutable from 'immutable';

export default (state = Immutable.List(['Code More!', 'And more!']), action) => {
  switch (action.type) {
    case 'addTodo':
      return state.push(action.todo);
    default:
      return state;
  }
};
