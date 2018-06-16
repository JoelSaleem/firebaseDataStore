import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import AuthForm from './components/AuthForm';
import CreateUserForm from './components/CreateUserForm';
import DataForm from './components/DataForm';

const RouterComponent = () => {
  return(
    <Router>
      <Scene key="root">
        <Scene
          key="createUser"
          component={CreateUserForm}
          title="Create User"
          initial
          />
        <Scene
          key="auth"
          component={AuthForm}
          title="Please Log In"
          />
        <Scene
          key="dataForm"
          component={DataForm}
          title="Data Form"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
