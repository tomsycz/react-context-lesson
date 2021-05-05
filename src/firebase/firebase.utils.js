import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDu9eMkja9fCZrVM-2-FlHpp820pxI4C6Y",
  authDomain: "crwn-db-1ed6e.firebaseapp.com",
  projectId: "crwn-db-1ed6e",
  storageBucket: "crwn-db-1ed6e.appspot.com",
  messagingSenderId: "927347222265",
  appId: "1:927347222265:web:6a2e5f0916f662db7e6428",
  measurementId: "G-8K8E8RYT7L",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
