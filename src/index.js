// TODO доработать readme.md
// TODO убрать баг при повторном открытии попапа регистрации
// import styles
import "./vendor/normalize.css";
import "./styles/index.css";

// импорт переменных
import { popupContainer, headerAuthButton } from './scripts/constants';

// импорт класса валидатора
import { FormValidator } from "./scripts/FormValidator";
const formValidator = (...arg) => new FormValidator(...arg);

// импорт класс попапа регистрации
import { RegPopup } from './scripts/RegPopup';
const regPopup = (...arg) => new RegPopup(...arg);

// импорт класс попапа авторизации
import { AuthPopup } from './scripts/AuthPopup';
const authPopup = (...arg) => new AuthPopup(...arg);
const authPopupOpen = authPopup(popupContainer, formValidator, regPopup(popupContainer, formValidator).open).open;

const registrationPopup = regPopup(popupContainer, formValidator, authPopupOpen);

// слушатели событий
headerAuthButton.addEventListener('click', authPopupOpen);

// TODO remove code below
// const header = document.querySelector('.header');
// const menuButton = document.querySelector('.header__mobile-menu');
// const closeButton = document.querySelector('.popup__mobile-menu');
// const popup-mobile = document.querySelector('.popup-mobile');
// const popupAuth = document.querySelector('.popup-mobile-auth');
// const headerAuthButton = document.querySelector('.header__button');
// const closeAuthPopupBitton = document.querySelector('.popup-mobile-auth__close');
//
// const scrollY = document.body.style.top;
// document.body.style.position = '';
// document.body.style.top = '';
// window.scrollTo(0, parseInt(scrollY || '0') * -1);
//
// menuButton.addEventListener('click', (event) => {
//   header.classList.toggle('header_type_popup-opened');
//   popup-mobile.classList.toggle('popup_is-opened');
//   document.body.style.position = 'fixed';
//   document.body.style.top = `-${window.scrollY}px`;
// });
//
// closeButton.addEventListener('click', () => {
//   header.classList.remove('header_type_popup-opened');
//   popup-mobile.classList.remove('popup_is-opened');
//   popupAuth.classList.remove('popup_is-opened');
//   menuButton.classList.remove('header__mobile-menu_type_opened');
//   document.body.style.position = '';
//   document.body.style.top = '';
// });
//
// authButton.addEventListener('click', () => {
//   popupAuth.classList.toggle('popup_is-opened');
//   popup-mobile.classList.toggle('popup_is-opened');
//   header.classList.add('header_type_popup-opened');
//   menuButton.classList.add('header__mobile-menu_type_opened');
// });
//
// headerAuthButton.addEventListener('click', () => {
//   popupAuth.classList.toggle('popup_is-opened');
// })
//
// closeAuthPopupBitton.addEventListener('click', () => {
//   popupAuth.classList.toggle('popup_is-opened');
// })
