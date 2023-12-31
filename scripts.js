const home = document.getElementById('home')
const about = document.getElementById('about-us')
const services= document.getElementById('services')
const projects = document.getElementById('projects')
const techs = document.getElementById('techs')

const homeLink = document.querySelector('.home-link')
const aboutLink = document.querySelector('.about-link')
const servicesLink= document.querySelector('.services-link')
const projectsLink = document.querySelector('.projects-link')
const techsLink = document.querySelector('.techs-link')

const menu = document.querySelector('.menu')
const closeNav = document.querySelector('.close-nav')
const navbar = document.querySelector('nav')

if(menu){
    menu.addEventListener("click", ()=>{
        navbar.classList.add("active")
    })
}

if(closeNav){
    closeNav.addEventListener("click", ()=>{
        navbar.classList.remove("active")
    })
}

window.scrollBy(0, -document.querySelector('header').offsetHeight);

homeLink.addEventListener('click', ()=>{
    scrollToView(home)
    navbar.classList.remove("active")
})

aboutLink.addEventListener('click', ()=>{
    scrollToView(about)
    navbar.classList.remove("active")
})

servicesLink.addEventListener('click', ()=>{
    scrollToView(services)
    navbar.classList.remove("active")
})

projectsLink.addEventListener('click', ()=>{
    scrollToView(projects)
    navbar.classList.remove("active")
})

techsLink.addEventListener('click', ()=>{
    scrollToView(techs)
    navbar.classList.remove("active")
})

function scrollToView(element){
    const headerOffset = 120;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
    });
}



const slideUpOnScroll = new IntersectionObserver( function(entries, slideUpOnScroll) {
    entries.forEach(entry => {
        const targetElement = entry.target;

        if (!entry.isIntersecting) {
            return;
        } else {
            targetElement.classList.add("slide-up");
            slideUpOnScroll.unobserve(entry.target)
        }
    });
});

const slideLeftOnScroll = new IntersectionObserver( function(entries, slideUpOnScroll) {
    entries.forEach(entry => {
        const targetElement = entry.target;

        if (!entry.isIntersecting) {
            return;
        } else {
            targetElement.classList.add("slide-left");
            slideLeftOnScroll.unobserve(entry.target)
        }
    });
});




slideUpOnScroll.observe(services)
slideUpOnScroll.observe(projects)
slideLeftOnScroll.observe(techs)