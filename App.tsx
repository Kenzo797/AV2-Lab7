import { NavegacaoPrincipal } from './src/navigation';
import { initializeApp } from '@firebase/app';
import { auth, db } from './src/config/firebase-config';
import {  initializeAuth, getReactNativePersistence } from '@firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function App() {
  return (
    <NavegacaoPrincipal/>
  );
}
