import { fetchFromAPI } from "../tools/interfaceAPI.js";
import addLoader from "./display-utils/addLoader.js";
import {skills} from "../dataset/data.js";

export default async function displaySkills(lang="eng") {
    const target = document.querySelector(".skills-container");
    addLoader(target, lang);
    
    //const skills = await fetchFromAPI("api/skills");
    console.log(skills);
    if (skills) {
        target.innerHTML = buildSkillList(skills);
    }
}

function buildSkillList(skills) {
    let html = "";
    let counter = "0";
    skills.forEach( (skill) => {
        html += createSkillItem(skill, counter);
        counter++;
    });

    return html;
}

function createSkillItem(skill, counter) {

    const direction = (counter % 3 === 0) ? "down" : "left";
    return `<div class="container-item skill-item" data-aos="flip-${direction}" data-aos-duration="800">
                <img class="item-image skill-icon" src="${skill.icon_url}" alt ="${skill.name}" />
                <span class="item-name skill-name">${skill.name}</span>
            </div>`;
}