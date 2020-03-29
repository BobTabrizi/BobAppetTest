import React, {Component} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 150, height: 150}}
          source={require('../Images/koalar.jpg')}
        />
        <Text style={styles.textLogo}>Bob Apettite!</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogo: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.7)',
  },
});
