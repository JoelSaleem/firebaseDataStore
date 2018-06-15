import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { emailChanged, passwordChanged, createUser, creationError } from '../actions/newUserActions';
import { Field, Button, Spinner } from './common';

class CreateUserForm extends Component {
  showError() {
    if (this.props.newUser.error != '') {
      return(
        <View style={{ alignItems: 'center', paddingTop: 15 }}>
          <Text
          style={{
            color: 'red',
            fontSize: 16
          }}>
            {this.props.newUser.error}
          </Text>
        </View>
      );
    }
  }

  renderButton(email, password) {
    if (!this.props.newUser.loading) {
      return(
        <Button
          onPress={() => this.props.createUser(email, password)}
        >
          Create New User
        </Button>
      );
    } else {
      return(
        <Spinner />
      );
    };
  }

  render() {
    const { email, password } = this.props.newUser;
    return(
      <View style={{ paddingTop: 5 }}>
        <Field
          label={'Email:'}
          placeholder={"yourName@gmail.com"}
          onChangeText={text => { this.props.emailChanged(text)} }
          secureTextEntry={false}
          autoCorrect={false}
          value={email}
        />

        <Field
          label={'Password:'}
          placeholder={"*************"}
          onChangeText={text => { this.props.passwordChanged(text)} }
          secureTextEntry={true}
          autoCorrect={false}
          value={password}
        />

        {this.showError()}

        {this.renderButton(email, password)}

        <TouchableOpacity
          style={{ paddingTop: 5, paddingBottom: 10, alignItems: 'center' }}
          onPress={() => {Actions.auth()}}
        >
          <Text style={{ color: 'blue', textDecorationLine: 'underline'}}>
            Already have an account?
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
};

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps, { emailChanged,
                                          passwordChanged,
                                          createUser })(CreateUserForm);
