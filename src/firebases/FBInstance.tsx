import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, addDoc, collection, getDocs, query, onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUR_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const firebaseInstance = app;
export const dbService = getFirestore();
export const dbAddDoc = addDoc;
export const dbCollection = collection;
export const dbGetDoc = getDocs;
export const dbQuery = query;
export const dbOnSnapshot = onSnapshot;
