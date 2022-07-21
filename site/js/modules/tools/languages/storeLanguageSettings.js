import { getFromStorage, removeFromStorage, saveToStorage } from "../../settings/storage.js";
import { $, $all } from "../helpers/domSelector.js";
import { languages } from "./languages.js";


export function getStoredLanguage() {
    if (getFromStorage("selected-language")) {
        return getFromStorage("selected-language");
    } else return null;
}

export function saveLanguage(value) {
    saveToStorage("selected-language", value);
}

export function hasStoredLanguage() {
    return (getFromStorage("selected-language"));
}

export function clearLanguage() {
    removeFromStorage("selected-language");
}

export function insertClearButton(lang) {
    $all("#clear-language").forEach(button => {
        button.style = "display: inline";
        button.onclick = ((event) => {
            window.location.search = ""; // prevent language getting saved again if user refreshes the page.
            event.preventDefault();
            clearLanguage();
            $("#clear-language").innerHTML = languages[lang].languageRemoved;
        });
    });
    
}