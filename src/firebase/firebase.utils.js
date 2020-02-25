import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAaLME0rz2vg3YCe-PukZ6xlHGHgCRh8A4",
    authDomain: "shop-db-react.firebaseapp.com",
    databaseURL: "https://shop-db-react.firebaseio.com",
    projectId: "shop-db-react",
    storageBucket: "shop-db-react.appspot.com",
    messagingSenderId: "893244713731",
    appId: "1:893244713731:web:8a45849f8239ec7b305736",
    measurementId: "G-T00BMF2KDG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;