import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDlBXFH5TI8yX4V2rgk_7BMGMcwGpiiaao",
    authDomain: "kaya-website.firebaseapp.com",
    projectId: "kaya-website",
    storageBucket: "kaya-website.appspot.com",
    messagingSenderId: "358643341308",
    appId: "1:358643341308:web:e0953434aaa18382304479"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {db,auth,provider};