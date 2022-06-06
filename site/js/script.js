import { fetchFromAPI } from "./modules/tools/interfaceAPI.js";
import {baseURL} from "./modules/settings/baseURL.js";

async function getContent() {
    const content = await fetchFromAPI(baseURL + "api/projects");
    console.log(content);
}
getContent();