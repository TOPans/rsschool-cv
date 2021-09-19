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

console.log('pull request - https://github.com/TOPans/rsschool-cv/pull/6');
console.log('Score: 150 / 150');
console.log('Не выполненные/не засчитанные пункты: видео-резме - 0');
console.log('Остальные пункты на мой взгяд выполненны на максимальный балл - 150');
console.log('Полное описание в пулреквесте ссылка в самом верху :) ');