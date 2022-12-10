// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyCwu4tlzBCkzBoyMSYWmGKJTHwAVuV4oyo",

    authDomain: "codechat-476e4.firebaseapp.com",

    projectId: "codechat-476e4",

    storageBucket: "codechat-476e4.appspot.com",

    messagingSenderId: "929934202610",

    appId: "1:929934202610:web:d18fe4d937d6af9690e26b"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
