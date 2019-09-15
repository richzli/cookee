import * as WebBrowser from 'expo-web-browser';
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
import KeyboardSpacer from 'react-native-keyboard-spacer';

import { MonoText } from '../components/StyledText';
import ChatInputBox from '../components/ChatInputBox';
import { PrintPost } from '../components/PrintPost';

export default function HomeScreen() {
  var [messageArray, setMessageArray] = useState([])
  var [timeArray, setTimeArray] = useState([])
  var [messages, setMessages] = useState([])
  var [emails, setEmails] = useState([])
  var [thumbnails, setThumbnails] = useState([])
  var e = [];
  var m = [];
  var t = [];
  var th = [];
  var array = [];
  var messagess = [];
  getData = async () => {
    try {
      const {docs} = await firestore.collection('chat').orderBy('timestamp', 'desc').limit(5).get();
      messagess = docs.map(doc => doc.data());

      console.log(messagess)
      for(i=0;i<messagess.length;i++){
        const {message, timestamp, useremail,thumbnail} = messagess[i];
        m.push(message);
        t.push(timestamp);
        e.push(useremail)
      }
      
      console.log(m)
      console.log(t)
      setMessageArray(m);
      setTimeArray(t);
      setMessages(messagess);
      setEmails(e);
      setThumbnails(th);
      
  
    } catch (error) {
      console.error("Error getting document:", error);
    }
  }

  
  for(i=0;i<messages.length;i++){
    array.push(<PrintPost title={emails[messages.length-i-1]} date={new Date(timeArray[messages.length-i-1]).toDateString()} message={messageArray[messages.length-i-1]} thumbnail={thumbnails[messages.length-i-1]}></PrintPost>);
 }

    } 

    // firestore.collection("chat").get().then(function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {
    //       if (doc.exists) {
    //         console.warn("Document data:", doc.data());
    //       } else {
    //         // doc.data() will be undefined in this case
    //         console.warn("No such document!");
    //       }
    //     });
    // }).catch(function(error) {
    //     console.warn("Error getting document:", error);
    // });
    // }
  }

  return (
    <View style={styles.container}>
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>


        {array}

      <View style={styles.getStartedContainer}>
        <DevelopmentModeNotice />
        
         
        <Text style={styles.getStartedText}>REEEEEE</Text>

        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
          <MonoText>screens/HomeScreen.js</MonoText>
        </View>
        <Text style={styles.getStartedText}>
          Change this text and your app will automatically reload.

        </Text>
      </View>


      <ChatInputBox />
      <Button
        title={'GET'}
        style={styles.sendBox}

        onPress={() =>  {getData();} }
      />
    </ScrollView>
    <KeyboardSpacer />
  </View>
  );

}

HomeScreen.navigationOptions = {
  header: null,
};

// function getData() {
//   firestore.collection('chat').doc('XLOK7PlDGmhEcM0SqlYo').get().then(function(doc) {
//     if (doc.exists) {
//         console.warn("Document data:", doc.data());
//         const {message, timestamp} = doc.data();
//         this.setState({ messageText: message });
//     } else {
//         // doc.data() will be undefined in this case
//         console.warn("No such document!");
//     }
//   }).catch(function(error) {
//       console.warn("Error getting document:", error);
//   });

// firestore.collection("chat").get().then(function(querySnapshot) {
//     querySnapshot.forEach(function(doc) {
//       if (doc.exists) {
//         console.warn("Document data:", doc.data());
//       } else {
//         // doc.data() will be undefined in this case
//         console.warn("No such document!");
//       }
//     });
// }).catch(function(error) {
//     console.warn("Error getting document:", error);
// });
// }

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  textInput: {
    height: 30,
    textAlign: "center",
    color: "#333333",
    marginBottom: 10,
    fontSize: 24,
    borderWidth: 1,
    borderBottomColor: "#111111"
  }
});