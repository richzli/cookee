import React, { Component } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";
import DismissKeyboard from "dismissKeyboard";

import { firebase } from "../config/firebase";

export default class LoginBox extends Component {
  state = {
    email: "",
    password: ""
  };

  login() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.setState({ email: "", password: "" });
        alert("Login successful!");
      })
      .catch(function(error) {
        alert(error.message);
      });
  }

  signup() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        alert("Signup successful!");
      })
      .catch(function(error) {
        alert(error.message);
      });
  }

  render() {
    const { email, password } = this.state;

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          DismissKeyboard();
        }}
      >
        <View style={styles.container}>
          <TextInput
            value={email}
            style={styles.inputBox}
            placeholder={"Email"}
            onChangeText={value => {
              this.setState({ email: value });
            }}
          />
          <TextInput
            value={password}
            style={styles.inputBox}
            placeholder={"Password"}
            onChangeText={value => {
              this.setState({ password: value });
            }}
          />
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Button
              title={"Login"}
              style={styles.button}
              onPress={() => {
                this.login();
              }}
            />
            <Button
              title={"Sign up"}
              style={styles.button}
              onPress={() => {
                this.signup();
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "stretch",
    marginLeft: 30,
    marginRight: 30
  },
  inputBox: {
    height: 30,
    borderWidth: 1,
    marginBottom: 20,
    borderColor: "#111111"
  },
  button: {
    flex: 1
  }
});
