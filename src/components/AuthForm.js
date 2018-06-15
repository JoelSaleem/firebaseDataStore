import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { emailInputChange, passwordInputChange, loginUser } from '../actions/authActions';
import { connect } from 'react-redux';
import { Field, Button, Spinner } from './common';


class AuthForm extends Component {
  onButtonPressCB() {
    const { email, password } = this.props.state.auth;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.state.auth.loading === true) {
      return(
        <Spinner />
      );
    } else {
      return(
        <Button onPress={this.onButtonPressCB.bind(this)}>Log In</ Button>
      );
    }
  }

  renderError() {
    if (this.props.state.auth.error == true) {

      return(
        <View style={{ alignItems: 'center' }}>
          <Text
          style={{ color: 'red', fontSize: 16, paddingTop: 2, paddingBottom: 2 }}
          >
            The email/password combination is incorrect
          </Text>
        </View>
      );
    }
  }

  render() {
    return(
      <View style={{ paddingTop: 12, backgroundColor: 'white' }}>
        <Field
          label={'Email:'}
          placeholder={'yourName@mail.com'}
          onChangeText={ text => this.props.emailInputChange( text )}
          secureTextEntry={false}
          value={this.props.state.auth.email}
        />

        <Field
          label={'Password:'}
          placeholder={'********'}
          secureTextEntry={true}
          onChangeText={ text => this.props.passwordInputChange( text )}
          value={this.props.state.auth.password}
        />

        {this.renderError()}

        {this.renderButton()}

      </View>
    );
  }
};

const mapStateToProps = state => {
  return { state };
}

export default connect(mapStateToProps, {
  emailInputChange,
  passwordInputChange,
  loginUser
})(AuthForm);
