// import styles
import "../vendor/normalize.css";
import "../styles/articles.css";

// импорт переменных
import {
  cardsContainer,
  mobileMenuButton,
  closeMobileMenuButton,
  mobilePopup
} from '../js/constants';
import { apiConfig } from "../js/configs/apiConfig";

import MainApi from '../js/api/MainApi';
import Header from "../js/components/Header";
import NewsCardList from "../js/components/NewsCardList";
import NewsCard from "../js/components/NewsCard";
import PopupMobile from "../js/components/PopupMobile";

// параметры для попапа хэдера
const headerArgs = {}
// параметры для карточек
const newsCardArgs = {}
// параметры для листа карточек
const cardListArgs = {
  container: cardsContainer,
}
// параметры для мобильного попапа
const mobilePopupArgs = {
  container: mobilePopup,
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
// mobilePopupArgs.mobileMenuRender = header.mobileMenuButtonRender;
mobilePopupArgs.header = header;

const newsCardList = new NewsCardList(cardListArgs);
// создание экземпляра мобильного попапа
const mobile = new PopupMobile(mobilePopupArgs);

// рендеринг шапки
header.render();

mobileMenuButton.addEventListener('click', () => {
  mobile.open();
  header.mobileMenuButtonRender();
});
closeMobileMenuButton.addEventListener('click', () => {
  mobile.close();
  header.mobileMenuButtonRender();
});

new Promise((resolve, reject) => {
  const savedCards = api.getInitialCards();
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
