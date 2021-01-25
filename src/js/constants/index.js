// ПЕРЕМЕННЫЕ
// кнопки
const headerAuthButton = document.querySelector('.header__button');
const signupButton = document.querySelector('.popup__link_place_auth-popup');
const signInButton = document.querySelector('.popup__link_place_reg-popup');
const signInButtonPlaceSuccess = document.querySelector('.popup__link_place_success-popup');
const searchButton = document.querySelector('.cover__button');
const mobileMenuButton = document.querySelector('.header__mobile-menu');
const closeMobileMenuButton = document.querySelector('.header__mobile-menu_type_opened');
const authPopupMobileButton = document.querySelector('.popup-mobile__button');
// попапы
const loginPopup = document.querySelector('#auth-popup');
const signupPopup = document.querySelector('#reg-popup');
const successPopup = document.querySelector('#success-popup');
const mobilePopup = document.querySelector('#mobile-popup');
// другое
const cardsContainer = document.querySelector('.search-results__articles');
const searchResultsReady = document.querySelector('.search-results__ready');
const loader = document.querySelector('.search-results__searching');
const searchResultsEmpty = document.querySelector('.search-results__empty');
const searchForm = document.forms.search;

// экспорт переменных
export { headerAuthButton, signupButton, signInButton, signInButtonPlaceSuccess,
  searchButton, mobileMenuButton, closeMobileMenuButton, authPopupMobileButton,
  loginPopup, signupPopup, successPopup, mobilePopup, cardsContainer,
  searchResultsReady, loader, searchResultsEmpty, searchForm };
