import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Expo from 'expo';

import firebase from 'firebase';

// The following code courtesy of https://rnfirebase.io/docs/v3.3.x/auth/social-auth
// const googleLogin = async () => {
  
  // try {
  //   // Add any configuration settings here:
  //   await GoogleSignin.configure();

  //   const data = GoogleSignin.signIn();

  //   // create a new firebase credential with the token
  //   const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
  //   // login with credential
  //   const currentUser = await firebase.auth().signInWithCredential(credential);

  //   console.info(JSON.stringify(currentUser.toJSON()));
  // } catch (e) {
  //   console.error(e);
  // }
  
  // const result = await Expo.Google.logInAsync({

  // });
  // const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken, result.accessToken);
  // firebase.auth().signInAndRetrieveDataWithCredential(credential);
// }

export default class GoogleSignInButton extends Component {
  login() {
    console.log("in login");
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider).then(function(result) {
      console.log(result);
      var token = result.credential.accessToken;
      var user = result.user;
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      var email = error.email;
      var credential = error.credential;
    });

}
  render() {
    return (
      <TouchableOpacity onPress={() => {this.login()}}>
        <Image
          source={require('../assets/images/google-signin-button.png')}
        />
      </TouchableOpacity>

    );
  }
}