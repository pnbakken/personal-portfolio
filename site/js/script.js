import { fetchFromAPI } from "./modules/tools/interfaceAPI.js";
import {baseURL} from "./modules/settings/baseURL.js";
import displaySkills from "./modules/display/displaySkills.js";
import displayProjects from "./modules/display/displayProjects.js";
import translate from "./modules/tools/languages/translate.js";

let lang;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (urlParams.has("lang")) {
    lang = urlParams.get("lang");
    console.log(lang);
    translate(lang);
}

displayProjects(lang);
displaySkills();