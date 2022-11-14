//hamburger

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElement = document.querySelector('.menu__close');
const closeAside = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    hamburger.classList.add('active');
});

function hamburgerClose (event, arg) {
    event.addEventListener('click', () => {
        arg.classList.remove('active');
    });
}
hamburgerClose(closeElement, menu);
hamburgerClose(closeAside, menu);
hamburgerClose(menu, hamburger);

//percentage

const counters = document.querySelectorAll('.skills__percentage__item-percent');
const lines = document.querySelectorAll('.skills__percentage__item-filling-child');

counters.forEach((element, index) => {
    lines[index].style.width = element.innerHTML;
});