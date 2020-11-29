// ПЕРЕМЕННЫЕ
// кнопки
const headerAuthButton = document.querySelector('.header__button');
const signupButton = document.querySelector('.popup__link_place_auth-popup');
const signInButton = document.querySelector('.popup__link_place_reg-popup');
// логины
const loginPopup = document.querySelector('#auth-popup');
const signupPopup = document.querySelector('#reg-popup');
const successPopup = document.querySelector('#success-popup');

// server url
const apiConfig = {
  baseUrl: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  }
}

// экспорт переменных
export { headerAuthButton, signupButton, signInButton, loginPopup, signupPopup, successPopup, apiConfig };
