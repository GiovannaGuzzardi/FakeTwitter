import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// chaves unicas de cada projeto
// aponta erro mas funciona??????
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_FIREBASE_KEY,
    authDomain: import.meta.env.VITE_APP_FIREBASE_DOMAIN,
    projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_APP_FIREBASE_SENDER_ID,
    appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID,
};

// inicializa o firebase no projeto
const app = initializeApp(firebaseConfig);

// serviço de autentificação do firebase
export const auth = getAuth(app)

// serviço de autentificação de login com o google
export const googleProvider = new GoogleAuthProvider

// futuramente configurar o facebook


// database do firebase (ainda não integrado)
export const db = getFirestore(app)