import { Popup } from './Popup';

export class AuthPopup extends Popup {
  static _template = document.querySelector('#auth-popup').content;

  constructor({ container, validator, regPopupOpen, api }) {
    super(container);
    this._popupContent = AuthPopup._template.cloneNode(true).children[0];
    this._formValidator = validator;
    this._regPopupOpen = regPopupOpen;
    this._api = api;
    this.open = this.open.bind(this);
  }

  open = () => {
    super.open();
    this._container.appendChild(this._popupContent);
    this.form = document.forms.auth;
    this._setEventListeners();
    this.form.querySelector('.button').setAttribute('disabled', 'true');
  }

  _setEventListeners = () => {
    this._popupContent.querySelector('.popup__close').addEventListener('click', this.close);
    this._formValidator(this.form).setEventListeners();
    this.form.addEventListener('submit', this._handleAuthSubmit);
    this._regLink = this._popupContent.querySelector('.popup__reg-link');
    this._regLink.addEventListener('click', this.close);
    this._regLink.addEventListener('click', this._regPopupOpen);
  }

  _removeEventListeners = () => {
    this._formValidator(this.form).removeEventListeners();
    this._popupContent.querySelector('.popup__close').removeEventListener('click', this.close);
    this._regLink.removeEventListener('click', this.close);
  }

  _handleAuthSubmit = async (event) => {
    event.preventDefault();
    this._api.signIn(this.form.email.value, this.form.password.value)
      .then((data) => {
        localStorage.setItem('token', data.token);
        this._resetForm();
        this.close();
      })
      .catch(err => console.log(err));
  }

  close = () => {
    super.close();
    this._removeEventListeners();
    this._container.removeChild(this._popupContent);
  }
}
