import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBWzrpN9xhigAW7Ewe6BwtxsuszSANw6BY",
    authDomain: "chat-app-be2c2.firebaseapp.com",
    projectId: "chat-app-be2c2",
    storageBucket: "chat-app-be2c2.appspot.com",
    messagingSenderId: "818988820405",
    appId: "1:818988820405:web:c571ad2e594190311b1bfc"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };