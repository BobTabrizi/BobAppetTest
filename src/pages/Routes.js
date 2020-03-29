import React, {Component} from 'react';
import {Router, Stack, Scene, Action} from 'react-native-router-flux';

import Signup from './Signup';
import Login from '../components/Login';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene key="Login" component={Login} title="Login" initial={true} />
          <Scene key="Signup" component={Signup} title="Signup" />
        </Scene>
      </Router>
    );
  }
}
