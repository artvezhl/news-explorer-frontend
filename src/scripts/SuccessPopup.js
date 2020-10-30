import {Popup} from "./Popup";
// TODO разобраться почему не работает ссылка на попап авторизации
export class SuccessPopup extends Popup {
  static _template = document.querySelector('#success-popup').content;

  constructor({ container, authPopupOpen }) {
    super(container);
    this._popupContent = SuccessPopup._template.cloneNode(true).children[0];
    this._authPopupOpen = authPopupOpen;
  }

  _toggle = () => {
    this._container.classList.toggle('popup_is-opened');
  }

  open = () => {
    super.open();
    this._container.appendChild(this._popupContent);
    this._setEventListeners();
  }

  _setEventListeners = () => {
    this._popupContent.querySelector('.popup__close').addEventListener('click', this.close);
    this._authLink = this._popupContent.querySelector('.popup__reg-link');
    // this._authLink.addEventListener('click', this.close);
    this._authLink.addEventListener('click', () => console.log(this._authPopupOpen));
  }

  close = () => {
    this._toggle();
    this._popupContent.querySelector('.popup__close').removeEventListener('click', this.close);
    this._authLink.removeEventListener('click', this.close);
    this._authLink.removeEventListener('click', this._authPopupOpen);
    this._container.removeChild(this._popupContent);
  }
}
