import { fetchFromAPI } from "./modules/tools/interfaceAPI.js";
import {baseURL} from "./modules/settings/baseURL.js";
import displaySkills from "./modules/display/displaySkills.js";

async function getContent() {
    const content = await fetchFromAPI(baseURL + "api/skills");
    console.log(content);
    
}

displaySkills();