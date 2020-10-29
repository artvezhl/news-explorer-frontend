// TODO доработать readme.md
// TODO убрать баг при повторном открытии попапа регистрации
// import styles
import "./vendor/normalize.css";
import "./styles/index.css";

// импорт переменных
import { popupContainer, headerAuthButton, apiConfig } from './scripts/constants';

// импорт классов
import { Api } from './scripts/Api';
import { FormValidator } from "./scripts/FormValidator";
import { SuccessPopup } from "./scripts/SuccessPopup";
import { RegPopup } from './scripts/RegPopup';
import { AuthPopup } from './scripts/AuthPopup';

// создание экземпляра класса Api
const api = new Api(apiConfig);

// создание экземпляра класса валидатора
const formValidator = (...arg) => new FormValidator(...arg);

// выделение метода открытия попапа успешной регистрации
const successPopupOpen = new SuccessPopup(popupContainer).open;

// создание экземпляра класса попапа регистрации
let regPopup = (...arg) => new RegPopup(...arg);

// создание экземпляра класса попапа авторизации
const authPopup = new AuthPopup(popupContainer, formValidator, regPopup(popupContainer, formValidator).open);

// дополнение класса попапа регистрации
regPopup(popupContainer, formValidator, authPopup.open, api, successPopupOpen);

// создание экземпляра класса попапа успешной регистрации
const successPopup = new SuccessPopup(popupContainer, authPopup.open);

// слушатели событий
headerAuthButton.addEventListener('click', authPopup.open);

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
