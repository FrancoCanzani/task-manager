import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBAGt4fX4_AzPfkFRAGJpMymqiSqLZjhTU',
  authDomain: 'tasks-2cc74.firebaseapp.com',
  projectId: 'tasks-2cc74',
  storageBucket: 'tasks-2cc74.appspot.com',
  messagingSenderId: '900478969472',
  appId: '1:900478969472:web:cfbf0e7ee014f6d3706865',
  measurementId: 'G-NWT9K0NR8S',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
