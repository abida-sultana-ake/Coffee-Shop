import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsieTe60-zibvL2BkWHQLrMbRhtnOWqfU",
  authDomain: "bean-and-dream.firebaseapp.com",
  projectId: "bean-and-dream",
  storageBucket: "bean-and-dream.firebasestorage.app",
  messagingSenderId: "592828249220",
  appId: "1:592828249220:web:1d184cccbc048e25e5fed1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
