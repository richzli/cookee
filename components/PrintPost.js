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
                <Thumbnail source = {{uri: props.url}} />
                <Body>
                  <Text>{props.title}</Text>
                  <Text note>{props.date}</Text>
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
                  <Text></Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          </Content>
  );
}
