// TODO доработать readme.md

// import styles
import "./vendor/normalize.css";
import "./styles/index.css";

// импорт переменных
import { headerAuthButton, signupButton, signInButton, signInButtonPlaceSuccess, loginPopup, signupPopup, successPopup, apiConfig } from './js/constants';

// импорт классов
import MainApi from './js/api/MainApi';
import FormValidator from "./js/components/FormValidator";
import PopupSignIn from './js/components/PopupSignIn';
import PopupSignup from './js/components/PopupSignup';
import PopupSuccess from "./js/components/PopupSuccess";
import Header from "./js/components/Header";

// параметры для классов
// параметры для popupSignIn
const signInPopupArgs = {
  container: loginPopup,
  formName: 'auth',
}
// параметры для попапа регистрации
const signUpPopupArgs = {
  container: signupPopup,
  formName: 'reg',
}
// параметры для попапа успешной регистрации
const successPopupArgs = {
  container: successPopup,
}
// параметры для попапа хэдера
const headerArgs = {}

// Создание экземпляров классов
// создание экземпляра класса MainApi
const api = new MainApi(apiConfig);
// добавление API в конструкторы классов
signUpPopupArgs.api = api;
signInPopupArgs.api = api;
headerArgs.getUserInfo = api.getUserInfo;
// создание экземпляра класса валидатора
const formValidator = (...arg) => new FormValidator(...arg);
// добавление валидатора в объекты конструкторов классов
signUpPopupArgs.validator = formValidator;
signInPopupArgs.validator = formValidator;
// создание экземпляра класса хэдера
const header = new Header(headerArgs);
signInPopupArgs.renderHeader = header.render;
// создание экземпляра класса попапа успешной регистрации
const popupSuccess = new PopupSuccess(successPopupArgs);
signUpPopupArgs.successPopupOpen = popupSuccess.open;
// создание экземпляра класса логина
const popupSignIn = new PopupSignIn(signInPopupArgs);
// создание экземпляра класса регистрации
const popupSignUp = new PopupSignup(signUpPopupArgs);

// // импорт классов
// import Popup from "./js/components/Popup";
// import { MainApi } from './js/api/MainApi';
// import FormValidator from "./js/components/FormValidator";
// import PopupSuccess from "./js/components/PopupSuccess";
// import PopupSignup from './js/components/PopupSignup';
// import PopupSignIn from './js/components/PopupSignIn';
// import { Header } from "./js/components/Header";
//

// переменные для передачи в конструкторы классов
// // // параметры для попапа авторизации
// // const signInPopupArgs = {
// //   container: popupContainer,
// //   formName: 'auth',
// // }

// параметры для общего попапа

// // создание экземпляра класса хэдера
// const header = new Header(headerArgs);
// // добавление методов в объекты конструкторов классов
// signInPopupArgs.renderHeader = header.authorizedHeader;
// // //
// // // создание экземпляра класса валидатора
// // const formValidator = (...arg) => new FormValidator(...arg);
// // // добавление валидатора в объекты конструкторов классов
// // signUpPopupArgs.validator = formValidator;
// // signInPopupArgs.validator = formValidator;
// // // создание экземпляра класса попапа регистрации
// // const signUpPopup = new PopupSignup(signUpPopupArgs);
// // signInPopupArgs.signUpPopupOpen = signUpPopup.open;
// //
// // // создание экземпляра класса попапа авторизации
// // const authPopup = new PopupSignIn(signInPopupArgs);
// // // добавление методов в объекты конструкторов классов
// // signUpPopupArgs.signInPopupOpen = authPopup.open;
// // successPopupArgs.signInPopupOpen = authPopup.open;
// //

// рендеринг шапки
header.render();

// слушатели событий
headerAuthButton.addEventListener('click', popupSignIn.open);
signupButton.addEventListener('click', popupSignUp.open);
signupButton.addEventListener('click', popupSignIn.close);
signInButton.addEventListener('click', popupSignUp.close);
signInButton.addEventListener('click', popupSignIn.open);
signInButtonPlaceSuccess.addEventListener('click', popupSignIn.open);
signInButtonPlaceSuccess.addEventListener('click', popupSuccess.close);
