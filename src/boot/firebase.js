import { initializeApp } from "firebase/app";
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
  // Initialisez Firebase
  initializeApp(firebaseConfig);

  // Vous pouvez également ajouter des objets Firebase à l'instance Vue, à l'état de l'application, etc., en fonction de vos besoins

  // Exemple : Ajouter Firebase à l'instance Vue pour y accéder depuis les composants
  // Vue.prototype.$firebase = Firebase;
  // Remplacez Firebase par les objets Firebase spécifiques dont vous avez besoin
};
