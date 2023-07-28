// ----------------------------------------------------------------NavLinks----------------------------------------------------------------


const li = document.querySelectorAll(".nav-item");
    const sec = document.querySelectorAll("section");

    function activeMenu(){
      let len= sec.length;
      while(--len && window.scrollY + 97 < sec[len].offsetTop){}
      li.forEach(ltx => ltx.classList.remove("active"));
      li[len].classList.add("active");
    }
    activeMenu();
window.addEventListener("scroll", activeMenu);
    
// ----------------------------------------------------------------backgroundScroll----------------------------------------------------------------
const nav = document.querySelector("nav");
const sectionOne = document.querySelector(".home");

const sectionOptions = {};

const secObserv = new IntersectionObserver(function (
    entries,
    secObserv
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            nav.classList.add("nav-scroll");
        } else {
            nav.classList.remove("nav-scroll");
        }
    })
},
    sectionOptions);

secObserv.observe(sectionOne);


// ----------------------------------------------------------------Typing ----------------------------------------------------------------

var typed = new Typed(".auto-type", {
    strings: ["Designer", "Freelancer", "Developer", "Photographer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

// ----------------------------------------------------------------scrollUp ----------------------------------------------------------------
let span = document.querySelector(".up");

window.onscroll = function () {
    if (this.scrollY >= 500) {
        span.classList.add('show');
    } else {
        span.classList.remove('show');
    }
}
span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};