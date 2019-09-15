import firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyAUD3amZbRQqUgvJi9Qp4BWR3dsCe0JPzQ',
  authDomain: 'cookee-app.firebaseapp.com',
  databaseURL: 'https://cookee-app.firebaseio.com',
  projectId: 'cookee-app',
  storageBucket: 'cookee-app.appspot.com',
  messagingSenderId: '279653985796',
  appId: '1:279653985796:web:32371c45ad1c2702dbcf51'
}

const app = firebase.initializeApp(config);

export { firebase, app };
export default firestore = app.firestore();
