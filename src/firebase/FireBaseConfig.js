import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC5CtVKD4DtyKNdl1jMlsJK603M4bjRajU",
    authDomain: "electrozone-coder-1a39c.firebaseapp.com",
    projectId: "electrozone-coder-1a39c",
    storageBucket: "electrozone-coder-1a39c.appspot.com",
    messagingSenderId: "501596212391",
    appId: "1:501596212391:web:2c2f013ee0ef3ef1afdf82"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
