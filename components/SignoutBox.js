import React, { Component } from "react";
import { View, Button, Text } from "react-native";

import { firebase } from "../config/firebase";

export default class SignoutBox extends Component {
  render() {
    return (
      <View>
        <Text>
          {"Logged in as "}
          {firebase.auth().currentUser.email}
        </Text>
        <Button
          title={"Log out"}
          onPress={() => {
            firebase
              .auth()
              .signOut()
              .then(() => {
                alert("Log out successful!");
              })
              .catch(function(error) {
                alert(error.message);
              });
          }}
        />
      </View>
    );
  }
}
