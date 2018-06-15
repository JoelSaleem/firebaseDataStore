import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_INPUT_CHANGE,
  PASSWORD_INPUT_CHANGE,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  AUTH_ERROR
 } from '../constants'

export const emailInputChange = text => {
  return ({
    type: EMAIL_INPUT_CHANGE,
    payload: text
  });
};

export const passwordInputChange = text => {
  return({
    type: PASSWORD_INPUT_CHANGE,
    payload: text
  });
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER })
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);
        authError(dispatch);
      })
  };
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
  Actions.scene();
};

const authError = (dispatch) => {
  dispatch({ type: AUTH_ERROR, payload: true });
}
