
import firebase from "firebase/app";
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDwNvYWF_Kk3ct36OKi4jetSLqAx9JynCg",
  authDomain: "registration-dois.firebaseapp.com",
  projectId: "registration-dois",
  storageBucket: "registration-dois.appspot.com",
  messagingSenderId: "46610760138",
  appId: "1:46610760138:web:17e9a14a3e5f763f878f33",
  measurementId: "G-TBD7WHGV1X"
};

firebase.initializeApp(firebaseConfig);
export const firebaseDb = firebase.firestore();

export const firebaseAuth = firebase.auth();