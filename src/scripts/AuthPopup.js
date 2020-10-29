import { Popup } from './Popup';

export class AuthPopup extends Popup {
  static _template = document.querySelector('#auth-popup').content;

  constructor(popupContainer, formValidator, regPopupOpen) {
    super(popupContainer);
    this._popupContent = AuthPopup._template.cloneNode(true).children[0];
    this._formValidator = formValidator;
    this._regPopupOpen = regPopupOpen;
    this.open = this.open.bind(this);
    // this._api = api;
  }

  open = () => {
    super.open();
    this._container.appendChild(this._popupContent);
    this.form = document.forms.auth;
    this._setEventListeners();
    // this.form.addEventListener('submit', this._handleAuthSubmit);
    this.form.querySelector('.button').setAttribute('disabled', 'true');
  }

  _setEventListeners = () => {
    this._formValidator(this.form).setEventListeners();
    this._popupContent.querySelector('.popup__close').addEventListener('click', this.close);
    this._regLink = this._popupContent.querySelector('.popup__reg-link');
    this._regLink.addEventListener('click', this.close);
    this._regLink.addEventListener('click', this._regPopupOpen);
  }

  _removeEventListeners = () => {
    this._formValidator(this.form).removeEventListeners();
    this._popupContent.querySelector('.popup__close').removeEventListener('click', this.close);
    this._regLink.removeEventListener('click', this.close);
  }

  // _handleAuthSubmit = (event) => {
  //   event.preventDefault();
  //   const button = document.querySelector('.popup-mobile-auth__button');
  //   buttonText.textContent = 'Загрузка...';
  //   this._api.addNewCard(this.form.name.value, this.form.link.value)
  //     .then((obj) => {
  //       this.cardlist.addNewCard(obj);
  //       buttonText.textContent = '+';
  //       this._resetForm();
  //       this.close();
  //     })
  //     .catch(err => console.log(err));
  // }

  close = () => {
    super.close();
    this._removeEventListeners();
    this._container.removeChild(this._popupContent);
  }
}
