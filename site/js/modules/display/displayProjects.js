import { baseURL } from "../settings/baseURL.js";
import { fetchFromAPI } from "../tools/interfaceAPI.js";
import { languages } from "../tools/languages/languages.js";
import addLoader from "./display-utils/addLoader.js";

export default async function displayProjects(lang) {
    const target = document.querySelector(".projects-container");
    addLoader(target);

    const projects = await fetchFromAPI("api/projects");
    if (projects) {
        target.innerHTML = buildProjectList(projects.data, lang);
    }
}

function buildProjectList(projects, lang="eng") {
    let html = "";

    projects.forEach((project) => html += projectToHTML(project.attributes));
    return html;

    function projectToHTML(project) {
        const langDescription = `description_${lang}`;
        console.log(project);
        return `<div class="container-item project-item">
                   
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



