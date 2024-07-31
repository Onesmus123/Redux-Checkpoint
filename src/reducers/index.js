import { combineReducers } from 'redux';
import { ADD_TASK, EDIT_TASK, TOGGLE_TASK, SET_FILTER } from '../actions';

// Initial state for tasks
const initialTasksState = [
  { id: 1, description: 'Watch football match', isDone: false },
  { id: 2, description: 'Practice football skills', isDone: true }
];

// Reducer for handling tasks actions
const tasksReducer = (state = initialTasksState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case EDIT_TASK:
      return state.map(task =>
        task.id === action.payload.id ? { ...task, description: action.payload.description } : task
      );
    case TOGGLE_TASK:
      return state.map(task =>
        task.id === action.payload ? { ...task, isDone: !task.isDone } : task
      );
    default:
      return state;
  }
};

// Reducer for handling filter actions
const filterReducer = (state = 'ALL', action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
};

// Combine reducers into a single root reducer
export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filter: filterReducer
});
