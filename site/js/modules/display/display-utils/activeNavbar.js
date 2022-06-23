import { $, $all } from "../../tools/helpers/domSelector.js";

export default function activeNavbar() {
   const sections = $all("section, #header-banner");
    
   window.onscroll = () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop-500;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    $all(".nav-link").forEach(link => {
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        } else link.classList.remove("active");
    });
   }
}
