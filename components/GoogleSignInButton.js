import React, { Component, TouchableOpacity } from 'react-native';
import Expo from 'expo';
//import { GoogleSignin } from 'react-native-google-signin';

import { firebase } from '../config/firebase.js';

// The following code courtesy of https://rnfirebase.io/docs/v3.3.x/auth/social-auth
const googleLogin = async () => {
  /*
  try {
    // Add any configuration settings here:
    await GoogleSignin.configure();

    const data = await GoogleSignin.signIn();

    // create a new firebase credential with the token
    const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
    // login with credential
    const currentUser = await firebase.auth().signInWithCredential(credential);

    console.info(JSON.stringify(currentUser.toJSON()));
  } catch (e) {
    console.error(e);
  }
  */
  const result = await Expo.Google.logInAsync({
    
  });
  const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken, result.accessToken);
  firebase.auth().signInAndRetrieveDataWithCredential(credential);
}

export default class GoogleSignInButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={googleLogin()}>
        <Image
          source={require('../assets/images/google-signin-button.png')}
        />
      </TouchableOpacity>
    );
  }
}