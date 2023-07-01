const burger = document.querySelector('.burger');
const asideMenu = document.querySelector('.header__menu-wrapper');
const logoHeader = document.querySelector('.logo-block_header');
const navLinks =document.querySelectorAll('.navigation__link')

function toggleMenu() {
    burger.classList.toggle('aside-menu-open');
    asideMenu.classList.toggle('aside-menu-open');
    logoHeader.classList.toggle('aside-menu-open');
}

burger.addEventListener('click', toggleMenu);

navLinks.forEach(card => card.addEventListener('click', toggleMenu));