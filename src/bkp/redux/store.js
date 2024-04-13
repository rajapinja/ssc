import { createStore, combineReducers } from 'redux';
import serviceReducer from './redux/serviceReducer';
import userReducer from './redux/userReducer';

// Combine reducers
const rootReducer = combineReducers({
  service: serviceReducer,
  user: userReducer,
  // Add more reducers as needed
});

// Create Redux store
const store = createStore(rootReducer);

export default store;