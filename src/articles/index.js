// import styles
import "../vendor/normalize.css";
import "../styles/articles.css";

// импорт переменных
import { headerAuthButton, signupButton, signInButton, signInButtonPlaceSuccess, searchButton, loginPopup, signupPopup, successPopup, cardsContainer, searchForm } from '../js/constants';
import { apiConfig } from "../js/configs/apiConfig";

import MainApi from '../js/api/MainApi';
import Header from "../js/components/Header";
import NewsCardList from "../js/components/NewsCardList";
import NewsCard from "../js/components/NewsCard";

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
headerArgs.getUserInfo = api.getUserInfo;
newsCardArgs.api = api;
// создание экземпляра класса NewsCard
const newsCard = new NewsCard(newsCardArgs);
cardListArgs.newsCard = newsCard;
// создание экземпляра класса хэдера
const header = new Header(headerArgs);
const newsCardList = new NewsCardList(cardListArgs);

// рендеринг шапки
header.render();

const pageRender = new Promise((resolve, reject) => {
  const savedCards = api.getInitialCards();
  // console.log(savedCards)
  resolve(savedCards);
})
  .then((value) => {
    newsCardList.renderResults(value);
  })
  .then(() => {
    newsCardList.cardsNumberRender();
    newsCardList.keywordsRender();
  })
  .catch(err => console.log(err));

// ([api.getInitialCards()])
//   .then((value) => { newsCardList.renderResults(value[0]) })
//   .catch(err => console.log(err));