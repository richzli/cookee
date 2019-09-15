import React, {Component, useState} from 'react';
import { ExpoLinksView } from '@expo/samples';
import ChatInputBox from '../components/ChatInputBox';
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

export default function LinksScreen() {


  return (
    <ScrollView style={styles.container}>
       <ChatInputBox />
      <Button
        title={'GET'}
        style={styles.sendBox}
        onPress={() => { getData(); }}
      />
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
