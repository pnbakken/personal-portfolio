import $ from "../domSelector.js";
import { languages } from "./languages.js";
export default function translate(lang) {
    

        document.querySelectorAll(".has-text").forEach((element) => element.innerHTML = languages[lang][element.dataset.textname]);


    
    


}