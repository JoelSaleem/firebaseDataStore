import { combineReducers } from 'redux';
import authReducer from './authReducer';
import createUserReducer from './createUserReducer';

export default combineReducers({
  auth: authReducer,
  newUser: createUserReducer
});
