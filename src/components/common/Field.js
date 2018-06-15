import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Field = (props) => {
  const { labelStyle, inputStyle, containerStyle } = styles;
  return(
    <View style={containerStyle}>
      <Text style={labelStyle}>{props.label}</Text>
      <TextInput
        style = {inputStyle}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
        autoCorrect={false}
        value={props.value}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    width: 50,
    height: 30
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
//    height: 40,
//    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Field };
