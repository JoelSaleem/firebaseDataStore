import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import AuthForm from './components/AuthForm';
import CreateUserForm from './components/CreateUserForm';
import Scene2 from './components/Scene2';

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
          key="scene"
          component={Scene2}
          title="Scene 2"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
