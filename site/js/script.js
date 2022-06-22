
import displaySkills from "./modules/display/displaySkills.js";
import displayProjects from "./modules/display/displayProjects.js";
import translate from "./modules/tools/languages/translate.js";
import {hasStoredLanguage, saveLanguage, getStoredLanguage, insertClearButton} from "./modules/tools/languages/storeLanguageSettings.js";
import { $ } from "./modules/tools/helpers/domSelector.js";
import { languages } from "./modules/tools/languages/languages.js";
import { createMessage } from "./modules/display/display-utils/createMessage.js";
import fixedNavOnScroll from "./modules/display/display-utils/fixedNavOnScroll.js";
import activeNavbar from "./modules/display/display-utils/activeNavbar.js";


fixedNavOnScroll();
activeNavbar();

(function init() {
    let lang = "eng";

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
    $("#submit-message").onclick = ((event) => {
        event.preventDefault();
        createMessage($("#form-message"), "info-message", languages[lang].formNotActive);
    });
})();


