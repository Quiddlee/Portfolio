//hamburger

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElement = document.querySelector('.menu__close');
const closeAside = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    hamburger.classList.add('hamburger_active');
});

closeElement.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.classList.remove('hamburger_active');
});

closeAside.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.classList.remove('hamburger_active');
});