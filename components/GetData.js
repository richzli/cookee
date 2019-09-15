import React, { Component, useState } from 'react';
import {firestore} from '../config/firebase';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  SectionList,
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Icon, Left, Body, Button } from 'native-base';
import { MonoText } from './StyledText';
import ChatInputBox from './ChatInputBox';
import { PrintPost } from './PrintPost';

export default function getData(){


const [messageText, setMessageText] = useState('')
const [timestampValue, setTimestampValue] = useState(0)
var m = [];
var t = [];
var messages;
var array = [];
getData = async () => {
  try {
    const {docs} = await firestore.collection('chat').get();
    messages = docs.map(doc => doc.data())

    console.log(messages)
    for(i=0;i<messages.length;i++){
      const {message, timestamp} = messages[i];
      m.push(message);
      t.push(timestamp);
    }
    console.log(m)
    console.log(t)

    for(i=0;i<messages.length;i++){
      array.push(<PrintPost title="title" date={new Date().toDateString()} message="message" likes="342"></PrintPost>);
   }

  } catch (error) {
    console.error("Error getting document:", error);
  }
}
getData();
return array;
}