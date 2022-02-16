import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    appId: "1:266132662953:web:baed9c59cabc738ac217b8",
    apiKey: "AIzaSyAUoztskl6aNhat6LFCIQIx7ISu69Lwlcw",
    projectId: "kitkat123",
    authDomain: "kitkat123.firebaseapp.com",
    storageBucket: "kitkat123.appspot.com",
    measurementId: "G-X5CYWPQHLL",
    messagingSenderId: "266132662953"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
