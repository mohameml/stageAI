// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
} from "@env";

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
};

// const firebaseConfig = {
//     apiKey: "AIzaSyCEEz_pW0IX4uNBLpufQRdaQ88REOcN1vM",
//     authDomain: "auth-firebase-16579.firebaseapp.com",
//     projectId: "auth-firebase-16579",
//     storageBucket: "auth-firebase-16579.appspot.com",
//     messagingSenderId: "851031073689",
//     appId: "1:851031073689:web:e50818ccc9dc31e8466908",
// };

// Initialize Firebase
let app;

app = initializeApp(firebaseConfig);
// if (firebase.apps.length === 0) {
// } else {
//     app = firebase.app();
// }

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { auth, db };
