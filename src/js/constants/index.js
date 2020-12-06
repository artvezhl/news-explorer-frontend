// ПЕРЕМЕННЫЕ
// кнопки
const headerAuthButton = document.querySelector('.header__button');
const signupButton = document.querySelector('.popup__link_place_auth-popup');
const signInButton = document.querySelector('.popup__link_place_reg-popup');
const signInButtonPlaceSuccess = document.querySelector('.popup__link_place_success-popup');
const searchButton = document.querySelector('.cover__button');
// логины
const loginPopup = document.querySelector('#auth-popup');
const signupPopup = document.querySelector('#reg-popup');
const successPopup = document.querySelector('#success-popup');
// другое
const cardsContainer = document.querySelector('.search-results__articles');
const searchResultsArticles = document.querySelector('.search-results__articles');
const searchResultsReady = document.querySelector('.search-results__ready');
const loader = document.querySelector('.search-results__searching');
const searchResultsEmpty = document.querySelector('.search-results__empty');
const searchForm = document.forms.search;

// экспорт переменных
export { headerAuthButton, signupButton, signInButton, signInButtonPlaceSuccess, searchButton, loginPopup, signupPopup, successPopup, cardsContainer, searchResultsArticles, searchResultsReady, loader, searchResultsEmpty, searchForm };
