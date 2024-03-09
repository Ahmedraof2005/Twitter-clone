import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAfcInFZv3A7G3AdokGPc25ikNRLSkDlqc",
  authDomain: "a7aa-3d61e.firebaseapp.com",
  projectId: "a7aa-3d61e",
  storageBucket: "a7aa-3d61e.appspot.com",
  messagingSenderId: "916646550837",
  appId: "1:916646550837:web:b3a0e51fc9b57d1e12c07c"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = analytics
// export default db;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;

export const auth = getAuth();