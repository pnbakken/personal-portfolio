export async function fetchFromAPI(url) {
    console.log("fetching from " + url);
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (err) {
        console.error(err);
    }
}