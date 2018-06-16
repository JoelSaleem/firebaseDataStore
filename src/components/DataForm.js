import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {
  dataField1Changed,
  dataField2Changed,
  dataField3Changed
} from '../actions/dataFormActions.js';
import { Field, Button } from './common';

class DataField extends Component {
  field1CB() {
      // probably better to just put an () => action in onChangeText
  }

  render() {
   console.log(this.props.dataStore);
    return(
      <View style={{ paddingTop: 12 }}>
        <Field
          label='Data Field 1:'
          placeholder={'Enter your placholder text'}
          onChangeText={text => this.props.dataField1Changed(text)}
          //value={}
        />

        <Field
          label='Data Field 2:'
          placeholder={'Enter your placholder text'}
          onChangeText={text => this.props.dataField2Changed(text)}
          //value={}
        />

        <Field
          label='Data Field 3:'
          placeholder={'Enter your placholder text'}
          onChangeText={text => this.props.dataField3Changed(text)}
          //value={}
        />

        <Button>Save</Button>
      </View>
    );
  }
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { dataField1Changed,
                                          dataField2Changed,
                                          dataField3Changed
                                          })(DataField);
