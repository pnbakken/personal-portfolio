import {$all} from "../helpers/domSelector.js";
import { languages } from "./languages.js";

export default function translate(lang) {
     //Runs if page loads with either search params or a stored language value. Iterates all html tags classed as ".has-text"

        $all(".has-text").forEach((element) => element.innerHTML = languages[lang][element.dataset.textname]);
}