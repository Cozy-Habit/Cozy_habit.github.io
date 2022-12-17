console.log("Hello");

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