import firebase, { firestore } from 'firebase/app';
import "firebase/firestore"
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyA6edKiv6fO-JfN4sjimsx6Fx7PoE0I7Ow",
    authDomain: "business-app-838c6.firebaseapp.com",
    databaseURL: "https://business-app-838c6.firebaseio.com",
    projectId: "business-app-838c6",
    storageBucket: "business-app-838c6.appspot.com",
    messagingSenderId: "553385365260",
    appId: "1:553385365260:web:b859d15762342be7654329",
    measurementId: "G-T4Y40MQRBS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase