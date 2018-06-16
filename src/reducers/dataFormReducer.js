const INITIAL_STATE = {
  dataField1: '',
  dataField2: '',
  dataField3: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'data_field_1_changed':
      return { ...state, dataField1: action.payload };
    case 'data_field_2_changed':
      return { ...state, dataField2: action.payload };
    case 'data_field_3_changed':
      return { ...state, dataField3: action.payload };
    default:
      return INITIAL_STATE;
  }
};
