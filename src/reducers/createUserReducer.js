const INITIAL_STATE = {
  email: '',
  password: '',
  user: '',
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'email_changed':
      return { ...state, email: action.payload };
    case 'password_changed':
      return { ...state, password: action.payload };
    case 'create_user':
      return { ...state, loading: true };
    case 'creation_success':
      return { ...state, error: '', loading: false };
    case 'creation_failed':
        return { ...state, error: action.payload, loading: false };
    default:
      return state;
  };
};
