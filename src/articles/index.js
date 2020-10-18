import "../vendor/normalize.css";
import "../styles/articles.css";

const header = document.querySelector('.header');
const menuButton = document.querySelector('.header__mobile-menu');
const closeButton = document.querySelector('.popup__mobile-menu');
const popup = document.querySelector('.popup');

menuButton.addEventListener('click', (event) => {
  header.classList.toggle('header_type_popup-opened');
  popup.classList.toggle('popup_is-opened');
});

closeButton.addEventListener('click', () => {
  header.classList.toggle('header_type_popup-opened');
  popup.classList.toggle('popup_is-opened');
});
