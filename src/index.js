// TODO доработать readme.md

// import styles
import "./vendor/normalize.css";
import "./styles/index.css";

// импорт переменных
import {
  headerAuthButton,
  signupButton,
  signInButton,
  signInButtonPlaceSuccess,
  searchButton,
  loginPopup,
  signupPopup,
  successPopup,
  cardsContainer,
  searchForm,
  loader,
  searchResultsEmpty,
  searchResultsReady
} from './js/constants';
import { apiConfig } from "./js/configs/apiConfig";
import { newsConfig } from "./js/configs/newsConfig";

// импорт классов
import MainApi from './js/api/MainApi';
import NewsApi from "./js/api/NewsApi";
import NewsCard from "./js/components/NewsCard";
import NewsCardList from "./js/components/NewsCardList";
import FormValidator from "./js/components/FormValidator";
import PopupSignIn from './js/components/PopupSignIn';
import PopupSignup from './js/components/PopupSignup';
import PopupSuccess from "./js/components/PopupSuccess";
import Header from "./js/components/Header";

// TODO remove below to constants
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
// параметры для карточек
const newsCardArgs = {}
// параметры для листа карточек
const cardListArgs = {
  container: cardsContainer,
}

// Создание экземпляров классов
// создание экземпляра класса MainApi
const api = new MainApi(apiConfig);
// добавление API в конструкторы классов
signUpPopupArgs.api = api;
signInPopupArgs.api = api;
headerArgs.getUserInfo = api.getUserInfo;
newsCardArgs.api = api;
// создание экземпляра класса NewsApi
const newsApi = new NewsApi(newsConfig);
// добавление API в конструктор класса
cardListArgs.searchResults = newsApi.getNews;
// создание экземпляра класса NewsCard
const newsCard = new NewsCard(newsCardArgs);
cardListArgs.newsCard = newsCard;
// создание экземпляра класса NewsCardList
const newsCardList = new NewsCardList(cardListArgs);
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
searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  const stringToFind = searchForm.stringToSearch.value;

  return new Promise((resolve, reject) => {
    newsCardList.renderLoader();
    if (searchResultsEmpty) searchResultsEmpty.classList.remove('search-results__empty_active');
    const cardsArray = newsApi.getNews(stringToFind);
    resolve(cardsArray);
  })
    .then((cards) => {
      (!cards.length) ?
        searchResultsEmpty.classList.add('search-results__empty_active') :
        searchResultsReady.classList.add('search-results__ready_active');
      newsCardList.renderResults(cards, stringToFind);
    })
    .catch(err => console.log(err))
    .finally(() => {
      newsCardList.renderLoader();
      searchForm.stringToSearch.value = '';
    });
});
