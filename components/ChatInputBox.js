import React, { Component } from 'react';
import {
  StyleSheet,
  Test,
  View,
	TextInput,
	Button,
} from 'react-native';

import { firestore } from '../config/firebase';

export default class ChatInputBox extends Component {
  state = {
    message: '',
    timestamp: 0,
  };

  sendMessage() {
    if (!(this.state.message === '')) {
      let date = new Date();
      let time = date.getTime();
      this.setState({ timestamp: time }, () => {
        firestore.collection('chat').add(this.state).then( () => {
          this.setState({ message: '' });
        });
      });
    }
  } 

  render () {
    const { message, timestamp } = this.state;

    return (
      <View style={styles.row}>
        <TextInput
          value={message}
          placeholder={'Say something!'}
          style={styles.inputBox}
          onChangeText={value => this.setState({ message: value })}
        />
        <Button
          title={'Send'}
          style={styles.sendBox}
          onPress={() => { this.sendMessage(); }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
  },
  inputBox: {
    flex: 4,
    borderWidth: 1,
    borderColor: "#111111",
  },
  sendBox: {
    flex: 1,
  }
})