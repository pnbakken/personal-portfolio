import { baseURL } from "../settings/baseURL.js";
import { fetchFromAPI } from "../tools/interfaceAPI.js";
import { languages } from "../tools/languages/languages.js";
import addLoader from "./display-utils/addLoader.js";
import { createGenericErrorMessage } from "./display-utils/createMessage.js";
import {projects} from "../dataset/data.js";

export default async function displayProjects(lang="eng") {
    const target = document.querySelector(".projects-container");
    addLoader(target, lang);

    //const projects = await fetchFromAPI("api/projects");
    console.log(projects)
    if (projects) {
        target.innerHTML = buildProjectList(projects, lang);
    } else {
        createGenericErrorMessage(target, lang);
    }
}

function buildProjectList(projects, lang) {
    let html = "";

    let counter = 0;
    projects.forEach((project) => {
        html += projectToHTML(project, counter);
        counter++;
    });
    html += `<div class="container-item project-item" data-aos="fade-up" data-aos-duration="3000">
                <h3 class="has-text">${languages[lang].yourProject}</h3>
                <p class="has-text" data-textname="projectCall">${languages[lang].projectCall}</p>
                <a class="pseudo-button has-text" data-textname="bannerCTA" href="#contact">${languages[lang].bannerCTA}</a>
            </div>`;
    return html;

    function projectToHTML(project, counter) {
        console.log(project)
        const direction = (counter % 2 === 0) ? "down" : "up";
        const langDescription = `description_${lang}`;
        console.log(project);
        return `<div class="container-item project-item" data-aos="fade-in" data-aos-duration="1500">
                   
                    <div class="item-image project-image" style="background-image: url('${project.image_url}');"></div>
                    <h3 class="project-name">${project.name}</h3>
        
                    <div class="project-details">
                        <p>${project[langDescription]}</p>
                        
                        <div class="skill-list"></div>
                        <div class="project-links">
                            <a href="${project.github_url}"><img src="./assets/icon/technology/icon-github-light.svg"/ alt="${languages[lang].githubLink}"></a> <a href="${project.project_url}">${languages[lang].visit}</a>
                        </div>
                    </div>                    
        

                </div>`;
    }
}



