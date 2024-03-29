// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA3dd8iK2LJG1FWgj9qU_JmGFCn9jE9np4',
  authDomain: 'twitterclone-332f1.firebaseapp.com',
  projectId: 'twitterclone-332f1',
  storageBucket: 'twitterclone-332f1.appspot.com',
  messagingSenderId: '684072840224',
  appId: '1:684072840224:web:547eed3f0b396d9339e045',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
