import { defineNuxtPlugin } from "#app";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyChwYZkupUodYCVEaocZf6o1LW806y-ooQ",
    authDomain: "discord-clone-7cf17.firebaseapp.com",
    projectId: "discord-clone-7cf17",
    storageBucket: "discord-clone-7cf17.appspot.com",
    messagingSenderId: "482833395030",
    appId: "1:482833395030:web:ab5aef46b60078d36b7af7",
    measurementId: "G-B5WDV14XY1",
  };

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  return {
    provide: {
      firebaseAuth: auth
    }
  }
})
