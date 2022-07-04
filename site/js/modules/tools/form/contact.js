import {$} from "../helpers/domSelector.js";


export default (function contactForm() {
    $("#contact-form").addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("Form submit");
    })
    
})();