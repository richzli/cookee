import React from 'react';
import { View } from 'react-native';
import LoginBox from '../components/LoginBox';

export default function LoginScreen() {
  return (
    <View style={{ flex: 1 , justifyContent: 'center', alignItems: 'center' }}>
      <LoginBox />
    </View>
  );
}

LoginScreen.navigationOptions = {
  title: 'Login',
};