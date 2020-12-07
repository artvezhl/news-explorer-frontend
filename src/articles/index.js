// import styles
import "../vendor/normalize.css";
import "../styles/articles.css";

// импорт переменных
import { headerAuthButton, signupButton, signInButton, signInButtonPlaceSuccess, searchButton, loginPopup, signupPopup, successPopup, cardsContainer, searchForm } from '../js/constants';
import { apiConfig } from "../js/configs/apiConfig";

import MainApi from '../js/api/MainApi';
import Header from "../js/components/Header";

// параметры для попапа хэдера
const headerArgs = {}

// Создание экземпляров классов
// создание экземпляра класса MainApi
const api = new MainApi(apiConfig);
headerArgs.getUserInfo = api.getUserInfo;
// создание экземпляра класса хэдера
const header = new Header(headerArgs);

// рендеринг шапки
header.render();
