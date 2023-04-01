import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2SVdH1vCXP2CyxD2Zu-QzSsv1PjBJleg",
  authDomain: "linkedin-clone-b6212.firebaseapp.com",
  projectId: "linkedin-clone-b6212",
  storageBucket: "linkedin-clone-b6212.appspot.com",
  messagingSenderId: "552902092491",
  appId: "1:552902092491:web:3f19c59f0ef55a1c889d4e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// getting database and authentication details
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
