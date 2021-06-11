import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCBqtfkU8e8fzSF4A5eViq6AL7XpgBbK_E",
    authDomain: "crown-db-55f68.firebaseapp.com",
    projectId: "crown-db-55f68",
    storageBucket: "crown-db-55f68.appspot.com",
    messagingSenderId: "901588512790",
    appId: "1:901588512790:web:1443ecef0dd8b526f70537"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;