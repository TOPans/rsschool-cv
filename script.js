const burger = document.getElementById('header_burger');
const menu = document.getElementById('header_menu');
const body = document.getElementById('body');
const link = document.querySelectorAll('.header__link')

burger.addEventListener('click', toggleBurger);

link.forEach(function (element){
    element.addEventListener('click', toggleBurger);
})

function toggleBurger () {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    body.classList.toggle('lock');
}