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

if (menuWork) {
    menuWork.addEventListener("click", () => {
        window.location.replace("https://cozy-habit.github.io/#mywork");
    })
}
menuAbout.addEventListener("click", () => {
    window.location.replace("https://cozy-habit.github.io/about.html");
})
if (buttonWork) { //Necessary if button doesn't exist in a current html document that uses this script
    buttonWork.addEventListener("click", () => {
        window.location.replace("https://cozy-habit.github.io/#mywork");
    })
}
if (buttonHabitual) {
    buttonHabitual.addEventListener("click", () => {
        window.location.replace("https://cozy-habit.github.io/habitual.html");
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

//FOR PRODUCT PAGES MENU FOCUS

const sections_productpage = document.querySelectorAll('section');
const nav_productpage = document.querySelectorAll('aside div a');

window.addEventListener('scroll', () => {
    let current = '';
    sections_productpage.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 135) {
            //Wenn der unterste Rand größer gleich dem Beginn der Section ist
            //Hier muss jedoch der Header berücksichtig werden der über dem Section Beginn liegt und daher die Überschrift abschneidet
            current = section.getAttribute('id');

        }
    })
    nav_productpage.forEach(a => {
        a.classList.remove('active');
        if (a.classList.contains(current)) {
            a.classList.add('active');
        }
    })
})


if (document.getElementById(habitual)) {
    document.querySelector("nav .work").classList.add("active");
    console.log("working");
}


//FADE-IN ANIMATION
const observer = new IntersectionObserver((entries) => { //The problem was that the css classes where not in the right order which is why the one dominated the other
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            console.log(entry.target.classList)
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden-animate-Y, .hidden-animate-X');
hiddenElements.forEach((el) => observer.observe(el));

//It initially didn't work because the script laoded before the html content
//which is why navToggle is null
//Solution: put 'defer' where script is defined in header