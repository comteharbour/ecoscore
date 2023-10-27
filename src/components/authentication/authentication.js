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

async function createUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

export async function signin(email, password) {
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
    default:
      return `erreur inconnue : ${error.code}`;
  }
}
