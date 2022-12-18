console.log("Hello World");


const menuHome = document.querySelector(".home");
const menuWork = document.querySelector(".work");
//This works because it's the very first button that appears on the page
const buttonWork = document.querySelector(".button");
const menuAbout = document.querySelector(".about");
const buttonHabitual = document.querySelector("#habitual");


menuHome.addEventListener("click", () => {
    window.location.replace("http://localhost:3000/");
})
menuWork.addEventListener("click", () => {
    window.location.replace("http://localhost:3000/#mywork");
})
menuAbout.addEventListener("click", () => {
    window.location.replace("http://localhost:3000/about.html");
})
if (buttonWork) { //Necessary if button doesn't exist in a current html document that uses this script
    buttonWork.addEventListener("click", () => {
        window.location.replace("http://localhost:3000/#mywork");
    })
}
if (buttonHabitual) {
    buttonHabitual.addEventListener("click", () => {
        window.location.replace("http://localhost:3000/habitual.html");
    })
}




//FOR MENU ACTIVE SELECTION
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {

            current = section.getAttribute('id');

        }
    })
    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.classList.contains(current)) {
            a.classList.add('active');
        }
    })
})

//FOR MENU VISIBILITY BUTTON
const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute('data-visible');

    if (visibility === "false") {
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);

    } else if (visibility === "true") {
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);

    }
})



//It initially didn't work because the script laoded before the html content
//which is why navToggle is null
//Solution: put 'defer' where script is defined in header