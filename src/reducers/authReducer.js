import {
  EMAIL_INPUT_CHANGE,
  PASSWORD_INPUT_CHANGE,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  AUTH_ERROR
} from '../constants';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  error: false,
  user: ''
 };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_INPUT_CHANGE:
      return { ...state, email: action.payload, loading: false };
    case PASSWORD_INPUT_CHANGE:
      return { ...state, password: action.payload, loading: false };
    case LOGIN_USER:
      return {...state, loading: true, error: false, user: '' };
    case LOGIN_USER_SUCCESS:
      return {...state, loading: false,
                        email: '',
                        password: '',
                        error: false,
                        user: action.payload
             }
    case AUTH_ERROR:
      return {...state, error: true, loading: false }
    default:
      return state;
  };
};
