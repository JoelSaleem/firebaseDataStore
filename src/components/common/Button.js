import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  return(
    <View style={{ alignItems: 'center', flex: 1, backgroundColor: 'white' }}>
      <TouchableOpacity
      style={styles.buttonStyle}
      onPress={props.onPress}
      >
        <Text style={{ color: 'white'}}>{props.children}</Text>
      </TouchableOpacity>
    </View>
  );
};

export { Button };

const styles = {
  buttonStyle: {
    backgroundColor: '#F2385A',
    width: 200,
    height: 50,
    position: 'relative',
    margin: 30,
    top: 100,
    padding: 16,
    borderRadius: 10,
    shadowColor: '#F2385A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    alignItems: 'center'
  }
}
