
import displaySkills from "./modules/display/displaySkills.js";
import displayProjects from "./modules/display/displayProjects.js";
import translate from "./modules/tools/languages/translate.js";
import {hasStoredLanguage, saveLanguage, getStoredLanguage, clearLanguage, insertClearButton} from "./modules/tools/languages/storeLanguageSettings.js";
import { $ } from "./modules/tools/helpers/domSelector.js";
import { languages } from "./modules/tools/languages/languages.js";

let lang;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (hasStoredLanguage() && !urlParams.has("lang")) {
    console.log("has saved language");
    lang = getStoredLanguage();
    insertClearButton(lang);
   
    translate(lang);
} else if (urlParams.has("lang")) {
    
    lang = urlParams.get("lang");
    saveLanguage(lang);
    insertClearButton(lang);
    translate(lang);
    

} 

displayProjects(lang);
displaySkills(lang);