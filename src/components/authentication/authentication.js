import {
  getAuth,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// https://firebase.google.com/docs/auth/web/password-auth?hl=fr
// https://firebase.google.com/docs/reference/node/firebase.auth.Auth#createuserwithemailandpassword

const auth = getAuth();

export async function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export async function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function createErrorMessage(error) {
  switch (error.code) {
    case "auth/invalid-email":
      return "l'e-mail est invalide";
    case "auth/user-disabled":
      return "l'utilisateur est désactivé";
    case "auth/user-not-found":
      return "l'utilisateur n'existe pas";
    case "auth/wrong-password":
      return "le mot de passe est erroné";
    case "auth/email-already-in-use":
      return "l'utilisateur existe déjà";
    case "auth/operation-not-allowed":
      return "ce mode d'authentification n'est pas activé. COntectez l'administrateur.";
    case "auth/weak-password":
      return "le mot de passe choisi est trop faible";
    default:
      return `erreur inconnue : ${error.code}`;
  }
}
