import firebase from 'firebase';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBbsx2SexzFbHaWxLRbnf8-Pjh87Dw-e0c",
    authDomain: "definitely-not-facebook.firebaseapp.com",
    projectId: "definitely-not-facebook",
    storageBucket: "definitely-not-facebook.appspot.com",
    messagingSenderId: "178014147737",
    appId: "1:178014147737:web:9827c0b31f3c1e34801408"
}

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };