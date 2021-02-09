import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDug62CYIYify6RfosEJYwIgvWzO3AiNq4",
  authDomain: "discord-clone-f85b0.firebaseapp.com",
  projectId: "discord-clone-f85b0",
  storageBucket: "discord-clone-f85b0.appspot.com",
  messagingSenderId: "292850119439",
  appId: "1:292850119439:web:86dc56b37699772979847a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };
export default db;
