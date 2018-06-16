import { combineReducers } from 'redux';
import authReducer from './authReducer';
import createUserReducer from './createUserReducer';
import dataFormReducer from './dataFormReducer';

export default combineReducers({
  auth: authReducer,
  newUser: createUserReducer,
  dataStore: dataFormReducer
});
