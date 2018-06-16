export const dataField1Changed = text => {
  return({
    type: 'data_field_1_changed',
    payload: text
  });
};

export const dataField2Changed = text => {
  return({
    type: 'data_field_2_changed',
    payload: text
  });
};

export const dataField3Changed = text => {
  return({
    type: 'data_field_3_changed',
    payload: text
  });
};
