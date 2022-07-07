 // Import the functions you need from the SDKs you need

 import {initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
 import {getFirestore, doc, addDoc, collection} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js";

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
 export const firestore = getFirestore(app);

 export async function sendMessageToFirebase({name, email, subject, text}) {
    const message = {
        name: name,
        email: email,
        subject: subject,
        text: text,
    }
    return await sendToFirebase(message, "contact_message");
 }
 export async function sendToFirebase(objectToSend, target) {
    console.log("Sending data...");
    try {
        const docRef = await addDoc(collection(firestore, target), objectToSend);
        console.log("Document written with id: " + docRef.id);
        return true;
    } catch(err) {
        console.error("Error adding document: " + err);
        return false;
    }
    
    
    
 }  