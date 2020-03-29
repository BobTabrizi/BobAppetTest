import React, {Component} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Signup extends Component {
  logIn() {
    Actions.Login();
  }

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Form type="Signup" />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Already have an account?</Text>
          <TouchableOpacity onPress={this.logIn}>
            <Text style={styles.registerText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#455a64',
  },

  signupTextCont: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: 16,
  },
  signupText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
  },
  registerText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
});
