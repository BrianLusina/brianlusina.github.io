import { initializeApp } from 'firebase/app';
import config from '@config';

const { firebase } = config;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  ...firebase,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
