import { baseURL } from "../settings/baseURL.js";

export async function fetchFromAPI(url) {
    console.log("fetching from " + url);
    try {
        const response = await fetch(baseURL + url);
        const result = await response.json();
        console.log(result);
        if(!result.error) {
            return result;
        } else return null;
    } catch (err) {
        console.error(err);
        return null
    }
}