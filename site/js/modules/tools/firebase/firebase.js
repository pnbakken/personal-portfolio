 // Import the functions you need from the SDKs you need

 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
 import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js";

 // TODO: Add SDKs for Firebase products that you want to use

 // https://firebase.google.com/docs/web/setup#available-libraries


 // Your web app's Firebase configuration

 const firebaseConfig = {

   apiKey: "AIzaSyDJXUZPRdGk6toJrCscZqiPXAYcuFL0jjk",

   authDomain: "pnbakken-contact.firebaseapp.com",

   projectId: "pnbakken-contact",

   storageBucket: "pnbakken-contact.appspot.com",

   messagingSenderId: "411453290922",

   appId: "1:411453290922:web:8c0cb6cbc0ce120b5593d3"

 };


 // Initialize Firebase

 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);