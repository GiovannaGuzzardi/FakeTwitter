import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from 'firebase/auth';
import { collection, getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

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
export const authConfig = getAuth(app)

// serviço de autentificação de login com o google
export const googleProvider = new GoogleAuthProvider

// servição de autenficação com o facebook
export const facebookProvider = new FacebookAuthProvider

export const storage = getStorage()

// database do firebase (ainda não integrado)
export const db = getFirestore(app)

export const usersCollection = collection(db, "users")