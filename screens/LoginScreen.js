import React from 'react';
import GoogleSignInButton from '../components/GoogleSignInButton';

export default function LoginScreen() {
  return (
    <View style={{ flex: 1 , justifyContent: 'center', alignItems: 'center' }}>
      <GoogleSignInButton />
    </View>
  );
}

LoginScreen.navigationOptions = {
  title: 'Login',
};