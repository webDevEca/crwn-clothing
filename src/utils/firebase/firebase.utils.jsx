import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpTwuPegq9wF5_moizg6TbF9Fbva1gO8E",
  authDomain: "crwn-cloathing-db-cb6c9.firebaseapp.com",
  projectId: "crwn-cloathing-db-cb6c9",
  storageBucket: "crwn-cloathing-db-cb6c9.appspot.com",
  messagingSenderId: "632512882894",
  appId: "1:632512882894:web:d96c0add4b90ae9b57889f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth= getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } =userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName, 
        email,
        createdAt
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;


};

