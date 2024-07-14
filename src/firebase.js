import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBKiARdieBh4iqouJsdPgxIPCuCkXGKndY",
  authDomain: "netflix-clone-cf223.firebaseapp.com",
  projectId: "netflix-clone-cf223",
  storageBucket: "netflix-clone-cf223.appspot.com",
  messagingSenderId: "670749981630",
  appId: "1:670749981630:web:ad7caaa84e58a0272157ef",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "))
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth,email,password)
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "))
    }
};

const logOut = ()=>{
    signOut(auth)
}

export {auth,db,login,signUp,logOut}