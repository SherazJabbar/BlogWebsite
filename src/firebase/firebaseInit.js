import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAq6lFfELnXiO4TjV9kAo5tBM42ke2XukE",
  authDomain: "blogwebsite-78db8.firebaseapp.com",
  projectId: "blogwebsite-78db8",
  storageBucket: "blogwebsite-78db8.appspot.com",
  messagingSenderId: "854367905483",
  appId: "1:854367905483:web:733f62e9299d5b76605d4e",
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
