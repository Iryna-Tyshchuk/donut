const openMenuBtn = document.querySelector('[data-menu-open]');
const closeMenuBtn = document.querySelector('[data-menu-close]');
const menu = document.querySelector('[data-menu]');
const body = document.querySelector('body');
const burgerList = document.querySelector('.navigation-burger-list');

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
burgerList.addEventListener('click', removeMenu);

function toggleMenu() {
  menu.classList.toggle('is-hidden');
  body.classList.toggle('no-scroll');
}
function removeMenu() {
  menu.classList.add('is-hidden');
  body.classList.remove('no-scroll');
}
