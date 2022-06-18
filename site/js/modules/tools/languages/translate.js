import {$all} from "../helpers/domSelector.js";
import { languages } from "./languages.js";
export default function translate(lang) {
    

        $all(".has-text").forEach((element) => element.innerHTML = languages[lang][element.dataset.textname]);


    
    


}