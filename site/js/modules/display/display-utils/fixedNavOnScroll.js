import {$, $all} from "../../tools/helpers/domSelector.js";

export default function fixedNavOnScroll() {
    closeOnClick();
    window.addEventListener("scroll", () => {
        if (scrollY > 0) {
            $("nav").classList.add("scrolling-nav");
            
        } else $("nav").classList.remove("scrolling-nav");
        
    })
    
}

function closeOnClick() {
    const links = $all(".nav-link").forEach(link => link.addEventListener("click", () => {
        $(".navbar-toggler").click();                                            
    }));
    console.log(links)
}