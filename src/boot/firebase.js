import { boot } from "quasar";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "src/firebaseConfig"; // Importez la configuration Firebase

export default boot(async ({ app, store, router, Vue }) => {
  // Initialisez Firebase
  initializeApp(firebaseConfig);

  // Vous pouvez également ajouter des objets Firebase à l'instance Vue, à l'état de l'application, etc., en fonction de vos besoins

  // Exemple : Ajouter Firebase à l'instance Vue pour y accéder depuis les composants
  // Vue.prototype.$firebase = Firebase;
  // Remplacez Firebase par les objets Firebase spécifiques dont vous avez besoin
});
