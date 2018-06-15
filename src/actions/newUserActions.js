import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const emailChanged = text => {
  return({
    type: 'email_changed',
    payload: text
  });
};

export const passwordChanged = text => {
  return({
    type: 'password_changed',
    payload: text
  });
};

export const createUser = (email, password) => {
  return (dispatch) => {
    dispatch({ type: 'create_user' });
    firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(() => {creationUserSuccess(dispatch)})
      .catch( error => {
        creationError(dispatch, error.message);
      });
    }
};

export const creationUserSuccess = dispatch => {
  dispatch({ type: 'creation_success' });
  Actions.auth();
}

export const creationError = (dispatch, errorMessage) => {
    dispatch({ type: 'creation_failed', payload: errorMessage });
};
