// reducers/index.js

import { combineReducers } from 'redux';
import serviceReducer from './redux/serviceReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  service: serviceReducer,
  user: userReducer,
  // Add more reducers as needed
});

export default rootReducer;
