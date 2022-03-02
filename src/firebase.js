import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDvCMSE8tGxj9KnT5DYx17Ishi4eBd0MMs",
  authDomain: "instagram-clone-react-2ab25.firebaseapp.com",
  databaseURL:
    "https://instagram-clone-react-2ab25-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-react-2ab25",
  storageBucket: "instagram-clone-react-2ab25.appspot.com",
  messagingSenderId: "993000959278",
  appId: "1:993000959278:web:b9c3f595d52fc1dc511ebf",
  measurementId: "G-DKKNPB85TC",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
