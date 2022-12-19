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

//FOR PRODUCT PAGES MENU FOCUS

const sections_productpage = document.querySelectorAll('section');
const nav_productpage = document.querySelectorAll('aside div a');

window.addEventListener('scroll', () => {
    let current = '';
    sections_productpage.forEach(section => {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop + 310) {
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



document.querySelector("nav .work").classList.add("active");


//IMAGE POP-UP
document.querySelectorAll('main img').forEach(image => {
    image.onclick = () => {
        console.log('click');
        document.querySelector('.container-popup').style.display = 'flex';
        document.querySelector('.container-popup img').src = image.getAttribute('src');
    }
});

document.querySelector('.container-popup span').onclick = () => {
    document.querySelector('.container-popup').style.display = 'none';
}

//It initially didn't work because the script laoded before the html content
//which is why navToggle is null
//Solution: put 'defer' where script is defined in header