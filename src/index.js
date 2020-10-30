// TODO доработать readme.md
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

// переменные для передачи в конструкторы классов
// параметры для попапа регистрации
const regPopupArgs = {
  container: popupContainer,
}
// параметры для попапа авторизации
const authPopupArgs = {
  container: popupContainer,
}
// параметры для попапа успешной регистрации
const successPopupArgs = {
  container: popupContainer,
}

// создание экземпляра класса Api
const api = new Api(apiConfig);
// добавление API в конструкторы классов
regPopupArgs.api = api;

// создание экземпляра класса валидатора
const formValidator = (...arg) => new FormValidator(...arg);
// добавление валидатора в объекты конструкторов классов
regPopupArgs.validator = formValidator;
authPopupArgs.validator = formValidator;

// выделение метода открытия попапа успешной регистрации
const successPopup = new SuccessPopup(successPopupArgs);
// добавление методов в объекты конструкторов классов
regPopupArgs.successPopupOpen = successPopup.open;

// создание экземпляра класса попапа регистрации
const regPopup = new RegPopup(regPopupArgs);
authPopupArgs.regPopupOpen = regPopup.open;

// создание экземпляра класса попапа авторизации
const authPopup = new AuthPopup(authPopupArgs);
// добавление методов в объекты конструкторов классов
regPopupArgs.authPopupOpen = authPopup.open;
successPopupArgs.authPopupOpen = authPopup.open;

// слушатели событий
headerAuthButton.addEventListener('click', authPopup.open);
