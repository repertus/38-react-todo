import {ADD_TASK, DELETE_TASK, GET_TASKS, UPDATE_TASK} from '../actions/types';

const todos = (state = [], action) => {
  switch(action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case UPDATE_TASK:
      return state.map(todo => {
        if(todo._id === action.payload.id) {
          return action.payload
        }

        return todos;
      });
    case DELETE_TASK:
      return state.filter(todo => todo._id !== action.payload.id);
    case GET_TASKS:
      return action.payload.todos;
    default:
      return state
  }
}

export default todos