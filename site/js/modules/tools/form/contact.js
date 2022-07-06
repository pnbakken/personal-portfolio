import { createMessage } from "../../display/display-utils/createMessage.js";
import {$, $all} from "../helpers/domSelector.js";


export default (function contactForm(lang) {
    const form = $("#contact-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (validateForm(form)) {
            packageForm(form);
        } else {
            createMessage($("#form-message"), "error-message", languages[lang].missingInput);
        }
    })
    
})();

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
    console.log("Packing form...");
}