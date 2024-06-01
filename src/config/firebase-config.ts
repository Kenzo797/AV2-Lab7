import { initializeApp } from "firebase/app";
import { getAuth, browserLocalPersistence, indexedDBLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';

 const firebaseConfig = {
  apiKey: "AIzaSyB33_sl73TvTdsriwvOXr1QOQ00hOfZWtI",
  authDomain: "teste-62e5a.firebaseapp.com",
  projectId: "teste-62e5a",
  storageBucket: "teste-62e5a.appspot.com",
  messagingSenderId: "634348425519",
  appId: "1:634348425519:web:4a1c9c47635191fd0711da",
  measurementId: "G-B6BW01GB1T"
};

const app = initializeApp(firebaseConfig);

// Configure a persistência para autenticação
const auth = getAuth(app);
const persistenceType = AsyncStorage ? browserLocalPersistence : indexedDBLocalPersistence;
auth.setPersistence(persistenceType);

// Obtenha uma instância do Firestore
const db = getFirestore(app);

export { auth, db };

