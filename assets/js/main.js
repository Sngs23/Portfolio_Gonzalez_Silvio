const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};

showMenu('nav-toggle', 'nav-menu');

const navLinks = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    // Al hacer clic en cada nav__link, se elimina la clase 'show'
    navMenu.classList.remove('show');
};

navLinks.forEach(link => link.addEventListener('click', linkAction));

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionLink = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionLink.classList.add('active-link');
        } else {
            sectionLink.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1200,
    delay: 50,
});

scrollReveal.reveal('.inicio__img, .sobre_mi__sub, .sobre_mi__text, .habilidades__img', { delay: 400 });
scrollReveal.reveal('.inicio__social-icon', { interval: 200 });
scrollReveal.reveal('.habilidades__data, .proyecto__img, .contact__input', { interval: 200 });

