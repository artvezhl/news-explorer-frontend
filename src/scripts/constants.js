// переменные
const popupContainer = document.querySelector('.popup-container');
const headerAuthButton = document.querySelector('.header__button');

// server url
const apiConfig = {
  baseUrl: 'https://localhost:3000/',
  headers: {
    'Content-Type': 'application/json'
  }
}

// экспорт переменных
export { popupContainer, headerAuthButton, apiConfig };
