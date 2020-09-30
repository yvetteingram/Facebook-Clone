import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD42DdDfDacs0UWUnTuVvk6gNeD_BJgw5Q",
    authDomain: "facebook-clone-4536c.firebaseapp.com",
    databaseURL: "https://facebook-clone-4536c.firebaseio.com",
    projectId: "facebook-clone-4536c",
    storageBucket: "facebook-clone-4536c.appspot.com",
    messagingSenderId: "959580580158",
    appId: "1:959580580158:web:6d663f5818017a33bba46f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;