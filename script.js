'use strict'

const menuBurgerImg = document.querySelector('.burger-menu');
menuBurgerImg.addEventListener('click', hideBurgerMenu, false);

const popupBack = document.querySelector('.popup-back');
popupBack.addEventListener('click', hideBurgerMenu, false);

const popupCros = document.querySelector('.popup-cross');
popupCros.addEventListener('click', hideBurgerMenu2, false);

function hideBurgerMenu(event) {
    if (event.target === popupBack || event.target === menuBurgerImg) {
        popupBack.classList.toggle('invis');
    }
}
function hideBurgerMenu2() {
    popupBack.classList.toggle('invis');
} 