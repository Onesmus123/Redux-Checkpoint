import { createStore } from 'redux';
import { rootReducer } from '../reducers';

// Create Redux store with root reducer
const store = createStore(rootReducer);

export default store;
