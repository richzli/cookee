import React, { useState } from "react";
import { View, TextInput } from "react-native";

import LoginBox from "../components/LoginBox";
import SignoutBox from "../components/SignoutBox";
import { firebase } from "../config/firebase";

export default function LoginScreen() {
  // return (
  //   <View style={{ justifyContent: "center" }}>
  //     <LoginBox />
  //     <SignoutBox />
  //   </View>
  // );
  const [user, setUser] = useState(null);

  firebase.auth().onAuthStateChanged(function(user) {
    setUser(user);
  });

  if (user)
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <SignoutBox />
      </View>
    );
  else
    return (
      <View style={{ justifyContent: "center" }}>
        <LoginBox />
      </View>
    );
}

LoginScreen.navigationOptions = {
  title: "User"
};
