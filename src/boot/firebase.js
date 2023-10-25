import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { firebaseConfig } from "./firbaseConfig"; // Importez la configuration Firebase
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

export default ({ app, router, store }) => {
  initializeApp(firebaseConfig);

  // const auth = getAuth();
  // app.config.globalProperties.$firebase = { auth };
};
