import {$all} from "../helpers/domSelector.js";
import { languages } from "./languages.js";

export default function translate(lang) {
     //Is called when page loads with either search params or a stored language value. Iterates all html tags classed as ".has-text" and finds replacement based on textname data.

        $all(".has-text").forEach((element) => element.innerHTML = languages[lang][element.dataset.textname]);
}