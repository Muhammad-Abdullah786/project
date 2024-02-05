// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/database";
// import "firebase/storage";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCHxiqio94he7QuMchkcQbdRj3WA6f_RKE",
//     authDomain: "react-ecommerce-projec.firebaseapp.com",
//     projectId: "react-ecommerce-projec",
//     storageBucket: "react-ecommerce-projec.appspot.com",
//     messagingSenderId: "961581921269",
//     appId: "1:961581921269:web:41dab36442d3e4bfcc26bc",
//     measurementId: "G-C7E61DKT87"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// } else {
//     firebase.app(); // if already initialized, use that one
// }

// export default firebase;
// export const auth = firebase.auth();
// export const firestore = firebase.firestore();
// export const storage = firebase.storage();






//////////////////////////////////////////////////////////////////////////
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHxiqio94he7QuMchkcQbdRj3WA6f_RKE",
    authDomain: "react-ecommerce-projec.firebaseapp.com",
    projectId: "react-ecommerce-projec",
    storageBucket: "react-ecommerce-projec.appspot.com",
    messagingSenderId: "961581921269",
    appId: "1:961581921269:web:41dab36442d3e4bfcc26bc",
    measurementId: "G-C7E61DKT87"
};

let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0];
}

const auth = getAuth(app);
const firestore = getFirestore(app);
const database = getDatabase(app);
const storage = getStorage(app);


export { auth, firestore, database, storage };
