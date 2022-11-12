//hamburger

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElement = document.querySelector('.menu__close');
const closeAside = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    hamburger.classList.add('active');
});

function closeElem (event, arg) {
    event.addEventListener('click', () => {
        arg.classList.remove('active');
    });
}
closeElem(menu, menu);
closeElem(closeAside, menu);
closeElem(menu, hamburger);
