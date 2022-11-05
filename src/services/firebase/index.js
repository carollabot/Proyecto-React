import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCdK8Q6XjE45mg2IoVLg1BJhN7o5SdgTVY",
  authDomain: "react-proyect-df178.firebaseapp.com",
  projectId: "react-proyect-df178",
  storageBucket: "react-proyect-df178.appspot.com",
  messagingSenderId: "615558337308",
  appId: "1:615558337308:web:21274ae42be5f54916e0d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)