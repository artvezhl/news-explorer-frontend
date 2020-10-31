import { Popup } from "./Popup";
// TODO разобраться почему не работает ссылка на попап авторизации
export class SignupPopup extends Popup {
  static _template = document.querySelector('#reg-popup').content;

  constructor({ container, validator, authPopupOpen, api, successPopupOpen }) {
    super(container);
    this._popupContent = SignupPopup._template.cloneNode(true).children[0];
    this._formValidator = validator;
    this._authPopupOpen = authPopupOpen;
    this._api = api;
    this._successPopupOpen = successPopupOpen;
  }

  open = () => {
    super.open();
    this._container.appendChild(this._popupContent);
    this.form = document.forms.reg;
    this._setEventListeners();
    this.form.querySelector('.button').setAttribute('disabled', 'true');
  }

  _setEventListeners = () => {
    this._popupContent.querySelector('.popup__close').addEventListener('click', this.close);
    this._formValidator(this.form).setEventListeners();
    this.form.addEventListener('submit', this._handleAuthSubmit);
    this._authLink = this._popupContent.querySelector('.popup__reg-link');
    // this._authLink.addEventListener('click', this.close);
    this._authLink.addEventListener('click', () => console.log(this._authPopupOpen));
  }

  _removeEventListeners = () => {
    this._formValidator(this.form).removeEventListeners();
    this._popupContent.querySelector('.popup__close').removeEventListener('click', this.close);
    this._authLink.removeEventListener('click', this.close);
  }

  _handleAuthSubmit = (event) => {
    event.preventDefault();
    this._api.signUp(this.form.email.value, this.form.password.value, this.form.name.value)
      .then(() => {
        this._resetForm();
        this.close();
        this._successPopupOpen();
      })
      .catch(err => {
        this._popupContent.querySelector('.error-message__signup-err').textContent = err.message;
      });
  }

  close = () => {
    super.close();
    this._removeEventListeners();
    this._container.removeChild(this._popupContent);
  }
}
