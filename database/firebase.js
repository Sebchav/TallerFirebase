import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBGzjlT8fnDkb-Kj_nzS20Toyu_gtaHnFI",
  authDomain: "react-native-firebase-a563d.firebaseapp.com",
  projectId: "react-native-firebase-a563d",
  storageBucket: "react-native-firebase-a563d.appspot.com",
  messagingSenderId: "777055801392",
  appId: "1:777055801392:web:672112176a929bd297ddf5",
  measurementId: "G-EJP9ST4K99"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  export default {
    firebase,
    db
  }