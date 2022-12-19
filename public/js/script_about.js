console.log("Hello World");


const menuHome = document.querySelector(".home");
const menuWork = document.querySelector(".work");
//This works because it's the very first button that appears on the page
const buttonWork = document.querySelector(".button");
const menuAbout = document.querySelector(".about");
const buttonHabitual = document.querySelector("#habitual");


menuHome.addEventListener("click", () => {
    window.location.replace("https://cozy-habit.github.io/");
})

menuWork.addEventListener("click", () => {
    window.location.replace("https://cozy-habit.github.io/#mywork");
})

menuAbout.addEventListener("click", () => {
    window.location.replace("https://cozy-habit.github.io/about.html");
})


//FOR MENU VISIBILITY BUTTON
const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const sidebar = document.querySelector("aside");

navToggle.addEventListener("click", () => {
    console.log("funktioniert");
    const visibility = nav.getAttribute('data-visible');

    if (visibility === "false") {
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
        sidebar.style.zIndex = "-1";

    } else if (visibility === "true") {
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
        sidebar.style.zIndex = "1";
    }
})

document.querySelector("nav .about").classList.add("active");

//It initially didn't work because the script laoded before the html content
//which is why navToggle is null
//Solution: put 'defer' where script is defined in header