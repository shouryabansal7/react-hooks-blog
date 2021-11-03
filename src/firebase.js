// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA0_Dt0r834gUyJKsfkXHUzUPm29ZaKxsM',
  authDomain: 'react-hooks-blog-d5494.firebaseapp.com',
  projectId: 'react-hooks-blog-d5494',
  storageBucket: 'react-hooks-blog-d5494.appspot.com',
  messagingSenderId: '459743913693',
  appId: '1:459743913693:web:943c388a464e25e0395d34',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore();
