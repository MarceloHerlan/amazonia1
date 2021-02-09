import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBiFPl5GVVxT6aAJWT7REu5NMZSB67d9o8",
  authDomain: "a-ee9b1.firebaseapp.com",
  databaseURL: "https://a-ee9b1.firebaseio.com",
  projectId: "a-ee9b1",
  storageBucket: "a-ee9b1.appspot.com",
  messagingSenderId: "307774192215",
  appId: "1:307774192215:web:fd9b765dbe4ab1390a0112"
};

const firebaseApp=firebase.initializeApp(firebaseConfig) 

const db=firebaseApp.firestore()
const auth=firebase.auth()

export {db, auth}