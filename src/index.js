// TODO test "start" script in package.json и проверить сборки в проекте
// TODO доработать readme.md
// TODO отработать по поддерживаемым браузерам и возможному созданию нового отдельного файла с браузерами
// TODO доделать попап и цвета в нем

import "./vendor/normalize.css";
import "./styles/index.css";

const header = document.querySelector('.header');
const menuButton = document.querySelector('.header__mobile-menu');
const closeButton = document.querySelector('.popup__mobile-menu');
const popup = document.querySelector('.popup');
const authButton = document.querySelector('.popup__button');
const popupAuth = document.querySelector('.popup-auth');
const headerAuthButton = document.querySelector('.header__button');
const closeAuthPopupBitton = document.querySelector('.popup-auth__close');

const scrollY = document.body.style.top;
document.body.style.position = '';
document.body.style.top = '';
window.scrollTo(0, parseInt(scrollY || '0') * -1);

menuButton.addEventListener('click', (event) => {
  header.classList.toggle('header_type_popup-opened');
  popup.classList.toggle('popup_is-opened');
  document.body.style.position = 'fixed';
  document.body.style.top = `-${window.scrollY}px`;
});

closeButton.addEventListener('click', () => {
  header.classList.remove('header_type_popup-opened');
  popup.classList.remove('popup_is-opened');
  popupAuth.classList.remove('popup_is-opened');
  menuButton.classList.remove('header__mobile-menu_type_opened');
  document.body.style.position = '';
  document.body.style.top = '';
});

authButton.addEventListener('click', () => {
  popupAuth.classList.toggle('popup_is-opened');
  popup.classList.toggle('popup_is-opened');
  header.classList.add('header_type_popup-opened');
  menuButton.classList.add('header__mobile-menu_type_opened');
});

headerAuthButton.addEventListener('click', () => {
  popupAuth.classList.toggle('popup_is-opened');
})

closeAuthPopupBitton.addEventListener('click', () => {
  popupAuth.classList.toggle('popup_is-opened');
})
