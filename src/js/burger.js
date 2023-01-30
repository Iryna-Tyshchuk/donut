const openMenuBtn = document.querySelector('[data-menu-open]');
const closeMenuBtn = document.querySelector('[data-menu-close]');
const menu = document.querySelector('[data-menu]');
const body = document.querySelector('body');

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  menu.classList.toggle('is-hidden');
  body.classList.toggle('no-scroll');
}
