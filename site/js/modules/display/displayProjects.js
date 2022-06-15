import { baseURL } from "../settings/baseURL.js";
import { fetchFromAPI } from "../tools/interfaceAPI.js";
import addLoader from "./display-utils/addLoader.js";

export default async function displayProjects() {
    const target = document.querySelector(".projects-container");
    addLoader(target);

    const projects = await fetchFromAPI("api/projects");
    if (projects) {
        target.innerHTML = buildProjectList(projects.data);
        addClickListener(target);
    }

    console.log(projects);

    
    console.log(target);
}

function buildProjectList(projects) {
    let html = "";

    projects.forEach((project) => html += projectToHTML(project.attributes));
    return html;

    function projectToHTML(project) {
        console.log(project);
        return `<div class="container-item project-item">
                   
                    <div class="item-image project-image" style="background-image: url('${project.image_url}');"></div>
                    <h3 class="project-name">${project.name}</h3>
        
                    <div class="project-details">
                        <p>${project.description}</p>
                        <div class="skill-list"></div>
                    </div>                    
        

                </div>`;
    }
}

function addClickListener(target) {
    const projects = target.querySelectorAll(".project-item");
    projects.forEach((project) => project.addEventListener("click", () => openProject(project)));
}

function openProject(project) {
    console.log("clicked on " + project);
    const details = project.querySelector(".project-details");
    console.log(details);
    details.style = "display: flex";
    details.addEventListener("click", () => {
        console.log("details closed");
    })
    
}

