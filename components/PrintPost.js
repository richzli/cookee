import React, { component } from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import { Container, Header, Content, Card, CardItem, Thumbnail, Icon, Left, Body, Button } from 'native-base';

  export function PrintPost(props){
    return(
        <Content>      
<Card style={{flex: 0, overflow: "scroll"}}>
   
            <CardItem>
              <Left>
                <Body>
                  <Text style={styles.wordBold}>{props.title}</Text>
                  <Text style={styles.italicText}>{props.date}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  {props.message}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  {/* <Icon name="logo-github" /> */}
                  <Text>{props.likes} likes</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          </Content>
  );
}

  const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
      marginTop: 100,
      padding: 20
   },
   text: {
      color: 'black',
   },
   capitalLetter: {
      color: 'black',
      fontSize: 20
   },
   wordBold: {
      fontWeight: 'bold',
      color: 'black'
   },
   italicText: {
      color: 'grey',
      fontStyle: 'italic'
   },
   textShadow: {
      textShadowColor: 'red',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius : 5
   }
})
