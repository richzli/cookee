import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import DismissKeyboard from 'dismissKeyboard';

import LoginBox from '../components/LoginBox';

export default function LoginScreen() {
  return (
    <TouchableWithoutFeedback onPress={() => {DismissKeyboard()}}>
      <LoginBox />
    </TouchableWithoutFeedback>
  );
}

LoginScreen.navigationOptions = {
  title: 'Login',
};