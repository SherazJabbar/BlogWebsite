import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {

};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
