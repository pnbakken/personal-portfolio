import {$, $all} from "../helpers/domSelector.js";


export default (function contactForm() {
    const form = $("#contact-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (validateForm(form)) {
            packageForm(form);
        }
    })
    
})();

function validateForm(form) {
    console.log("Validating form...");
    let valid = true;
    $all("input, textarea", form).forEach( (input) => {
        if(!input.value.trim()) {
            console.log(input);
            input.classList.toggle("input-error");
            valid = false;
            console.log(input + " invalid");
        }
    });

}

function packageForm(form) {
    console.log("Packing form...");
}