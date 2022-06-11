import { fetchFromAPI } from "../tools/interfaceAPI.js";
import addLoader from "./display-utils/addLoader.js";

export default async function displaySkills() {
    const target = document.querySelector(".skills-container");
    addLoader(target);
    
    const skills = await fetchFromAPI("api/skills");
    console.log(skills);
    if (skills) {
        target.innerHTML = buildSkillList(skills.data);
    }
}

function buildSkillList(skills) {
    let html = "";

    skills.forEach( (skill) => {
        html += createSkillItem(skill.attributes);
    });

    return html;
}

function createSkillItem(skill) {
    return `<div class="container-item skill-item">
                <img class="item-image skill-icon" src="${skill.image_url}" alt ="${skill.name}" />
                <h4 class="item-name skill-name">${skill.name}</h4>
            </div>`;
}