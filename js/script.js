const hamburger = document.querySelector('.nav__hamburger');
const navLinks = document.querySelector('.nav__links');

hamburger.addEventListener('click', () => {
    const isVisible = navLinks.classList.contains('visible');
    navLinks.classList.toggle('hidden', isVisible);
    navLinks.classList.toggle('visible', !isVisible);
    hamburger.setAttribute('aria-expanded', !isVisible);
});
