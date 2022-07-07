import { createMessage } from "../../display/display-utils/createMessage.js";
import {$, $all} from "../helpers/domSelector.js";
import { sendMessageToFirebase } from "../firebase/firebase.js";
import { languages } from "../languages/languages.js";

export default async function contactForm(lang) {
    const form = $("#contact-form");
    form.addEventListener("submit", async (e) => {
        
        e.preventDefault();
        createMessage($("#form-message"), "info-message", languages[lang].sending);
        if (validateForm(form)) {
            console.log("Form valid");
            const newMessage = await packageForm(form);
            const sendt = await sendMessageToFirebase(newMessage);
            if (sendt) {
                createMessage($("#form-message"), "success-message", languages[lang].messageSuccess);
            }
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
        console.log(input.value)
        if(!input.value.trim()) {
            input.classList.add("input-error");
            valid = false;
        } else {
            input.classList.remove("input-error");
        }
    });
    return valid;
}

async function packageForm(form) {

    const message = {
        name : $("#name", form).value,
        email : $("#email", form).value,
        subject : $("#subject", form).value,
        text : $("#message-text", form).value,
        time: new Date().toLocaleString(),
        read: false,
    }
    console.log($("#message-text", form).value);
    console.log("Packing form...");
    return message;
}
