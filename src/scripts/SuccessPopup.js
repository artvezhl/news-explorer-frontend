import {Popup} from "./Popup";

export class SuccessPopup extends Popup {
  static _template = document.querySelector('#success-popup').content;

  constructor(popupContainer, authPopupOpen) {
    super(popupContainer);
    this._popupContent = SuccessPopup._template.cloneNode(true).children[0];
    this._authPopupOpen = authPopupOpen;
  }

  open = () => {
    super.open();
    this._container.appendChild(this._popupContent);
    this._setEventListeners();
  }

  _setEventListeners = () => {
    this._popupContent.querySelector('.popup__close').addEventListener('click', this.close);
    this._popupContent.querySelector('.popup__reg-link').addEventListener('click', () => {
      this.close();
      this._authPopupOpen().bind(this);
    });
  }

  close = () => {
    super.close();
    this._popupContent.querySelector('.popup__close').removeEventListener('click', this.close);
    this._popupContent.querySelector('.popup__reg-link').removeEventListener('click', () => {
      this.close();
      this._authPopupOpen().bind(this);
    });
    this._container.removeChild(this._popupContent);
  }
}
