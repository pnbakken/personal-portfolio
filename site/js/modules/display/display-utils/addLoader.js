import { languages } from "../../tools/languages/languages.js";
export default function addLoader(target, lang) {
    target.innerHTML = `<div class="loader">
                            <div class="spinner"></div>
                            <p>${languages[lang].pleaseWait}</p>
                        </div>`;
}