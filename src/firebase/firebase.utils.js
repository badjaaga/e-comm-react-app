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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log('error creating user', err.message);
    }

  }
  return userRef;
}

export const convertCollectionsSnapshotToMap = (collectionsSnapshot) => {
  const transformedToCollection = collectionsSnapshot.docs.map(doc => {
    const {title, items} = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      items
    }
  });

  return transformedToCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
      },{})
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;