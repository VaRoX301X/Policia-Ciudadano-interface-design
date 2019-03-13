import firebase from 'firebase';
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB_kvmVB1dmYY3VySWF3fDO-C0Zb4xQs2A",
  authDomain: "cdi-policias.firebaseapp.com",
  databaseURL: "https://cdi-policias.firebaseio.com",
  projectId: "cdi-policias",
  storageBucket: "cdi-policias.appspot.com",
  messagingSenderId: "815750223890"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore()
