import React, { Component } from 'react';
import {
  StyleSheet,
  Test,
  View,
	TextInput,
	Button,
} from 'react-native';

import { firestore } from '../config/firebase';

export default class CookInput extends Component<{}> {
  constructor(props) {
	  super(props);
    state = {
      dish: "",
      ingredients: [],
      comment: ""
    }
  }

  render () {
    return (
      <View>
        <TextInput
          placeholder='Dish Name'
          style={styles.smallTextInput}
          onChangeText={value => this.setState({ dish: value })}
        />
        <TextInput
          placeholder='Ingredients (each on new line)'
          style={styles.bigTextInput}
          multiline={true}
          onChangeText={value => this.setState({ ingredients: value.split('\n') })}
        />
        <TextInput
          placeholder='Comments'
          style={styles.bigTextInput}
          multiline={true}
          onChangeText={value => this.setState({ comment: value })}
        />
        <Button
          onPress={() => {
            firestore.collection('cook').add(this.state);
          }}
          title='Create Post'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  smallTextInput: {
    height: 30,
    color: "#333333",
    textAlignVertical: 'top',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
    borderWidth: 1,
    borderBottomColor: "#111111",
  },
  bigTextInput: {
    height: 120,
    color: "#333333",
    textAlignVertical: 'top',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
    borderWidth: 1,
    borderBottomColor: "#111111",
  },
})