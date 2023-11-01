import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithCustomToken,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// https://firebase.google.com/docs/auth/web/password-auth?hl=fr
// https://firebase.google.com/docs/reference/node/firebase.auth.Auth#createuserwithemailandpassword

const auth = getAuth();

// TODO: évaluer l'utilité d'utiliser le package js-cookies
// TODO: évaluer s'il faut externaliser la gestion des cookies

const cookieName = "authCookie";
const expirationDays = undefined; // Nombre de jours avant l'expiration du cookie (undefined si pas d'expiration)

function getCookie(name) {
  const cookieString = decodeURIComponent(document.cookie);
  const cookies = cookieString.split("; ");

  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return cookieValue;
    }
  }

  return null; // Retourne null si le cookie n'est pas trouvé
}

const updateCookie = (token) => {
  const cookieValue = token;

  const cookieOptions = {
    expires: expirationDays
      ? new Date(new Date().getTime() + expirationDays * 24 * 60 * 60 * 1000)
      : undefined,
    sameSite: "strict", // Limite la transmission du cookie aux requêtes du même site (le choix peut être 'strict', 'lax', ou 'none')
    secure: true, // Le cookie est envoyé uniquement sur des connexions HTTPS
    path: "/", // Chemin du site où le cookie est accessible
  };

  // Création du cookie en utilisant les options
  document.cookie = `${cookieName}=${cookieValue}; expires=${cookieOptions.expires.toUTCString()}; path=${
    cookieOptions.path
  }; Secure=${cookieOptions.secure}; SameSite=${cookieOptions.sameSite}`;
};

const deleteAuthCookie = () => {
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
};

const storeIdToken = async (userCredential) => {
  const token = await userCredential.user.getIdToken();
  updateCookie(token);
};

const logout = async () => {
  try {
    await signOut(auth);
    deleteAuthCookie();
    return;
  } catch (error) {
    throw error;
  }
};

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      getAuth(),
      email,
      password
    );
    await storeIdToken(userCredential);
    return;
  } catch (error) {
    throw error;
  }
};

const automaticLoginIfPossible = async () => {
  const token = getCookie(cookieName);
  if (token) {
    try {
      const userCredential = await signInWithCustomToken(auth, token);
      await storeIdToken(userCredential);
      return;
    } catch (error) {
      throw error;
    }
  }
};

const signup = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      getAuth(),
      email,
      password
    );
    await storeIdToken(userCredential);
    return;
  } catch (error) {
    throw error;
  }
};

const createErrorMessage = (error) => {
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
      return "ce mode d'authentification n'est pas activé. Contactez l'administrateur.";
    case "auth/weak-password":
      return "le mot de passe choisi est trop faible";
    default:
      return `erreur inconnue : ${error.code}`;
  }
};

export default {
  logout,
  login,
  signup,
  automaticLoginIfPossible,
  createErrorMessage,
};
