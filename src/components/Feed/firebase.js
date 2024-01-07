import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAl034rNCb8FQ-FhrTayet7HqhOAhwnr9I",
  authDomain: "linkedin-clon-95b09.firebaseapp.com",
  projectId: "linkedin-clon-95b09",
  storageBucket: "linkedin-clon-95b09.appspot.com",
  messagingSenderId: "372868762485",
  appId: "1:372868762485:web:0364e0f3244489e215213c"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {db, auth};