import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHxiqio94he7QuMchkcQbdRj3WA6f_RKE",
    authDomain: "react-ecommerce-projec.firebaseapp.com",
    databaseURL: "https://react-ecommerce-projec-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "react-ecommerce-projec",
    storageBucket: "react-ecommerce-projec.appspot.com",
    messagingSenderId: "961581921269",
    appId: "1:961581921269:web:41dab36442d3e4bfcc26bc",
    measurementId: "G-C7E61DKT87"
};

const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

export { app };


