import { initializeApp, getApps } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
/*
Le fichier firebaseConfig.js doit contenir les informations suivantes.
Elles sont disponibles dans la console firebase, sous "paramètres du projet"

export const firebaseConfig = {
  apiKey: "...",

  authDomain: "...",

  projectId: "...",

  storageBucket: "...",

  messagingSenderId: "...",

  appId: "...",
};
*/

if (getApps().length < 1) {
  initializeApp(firebaseConfig);
}
