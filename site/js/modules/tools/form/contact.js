import { createMessage } from "../../display/display-utils/createMessage.js";
import {$, $all} from "../helpers/domSelector.js";
import { app, db } from "../firebase/firebase.js";
import { languages } from "../languages/languages.js";

export default function contactForm(lang) {
    const form = $("#contact-form");
    form.addEventListener("submit", (e) => {
        
        e.preventDefault();
        console.log(app);
        console.log(db.collection("contact_message"));
        if (validateForm(form)) {
            packageForm(form);
        } else {
            createMessage($("#form-message"), "error-message", languages[lang].missingInput);
        }
    })
    
}

// Reference Firebase messages collection

const messagesRef = "";

function validateForm(form) {
    console.log("Validating form...");
    let valid = true;
    $all("input, textarea", form).forEach( (input) => {

        if(!input.value.trim()) {
            console.log(input);
            input.classList.add("input-error");
            valid = false;
            console.log(input + " invalid");
        } else {
            input.classList.remove("input-error");
        }
    });
    return valid;
}

function packageForm(form) {

    const message = {
        name : $("#name").value,
    email : $("#email").value,
    subject : $("#subject").value,
    message : $("#message-text").value,
    }
    passMessageToFirebase(message);
    console.log("Packing form...");
}

function passMessageToFirebase({name, email, subject, message}) {
    const newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        subject: subject,
        message_text: message,
    })
}
