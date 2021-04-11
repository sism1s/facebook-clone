import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCZr9k_uV1HoG-lt9-MnLu1oAQgpSUn-oU",
  authDomain: "facebook-clone-293ef.firebaseapp.com",
  projectId: "facebook-clone-293ef",
  storageBucket: "facebook-clone-293ef.appspot.com",
  messagingSenderId: "233177721033",
  appId: "1:233177721033:web:315675d05427e515cf4518",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
