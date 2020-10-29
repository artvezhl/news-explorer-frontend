import { Popup } from "./Popup";

export class RegPopup extends Popup {
  static _template = document.querySelector('#reg-popup').content;

  constructor(popupContainer, formValidator, authPopupOpen, api, successPopupOpen) {
    super(popupContainer);
    this._popupContent = RegPopup._template.cloneNode(true).children[0];
    this._formValidator = formValidator;
    this._authPopupOpen = authPopupOpen;
    this._api = api;
    this._successPopupOpen = successPopupOpen;
  }

  open = () => {
    super.open();
    this._container.appendChild(this._popupContent);
    this._setEventListeners();
    this.form.querySelector('.button').setAttribute('disabled', 'true');
  }

  _setEventListeners = () => {
    this._popupContent.querySelector('.popup__close').addEventListener('click', this.close);
    this.form = document.forms.reg;
    this._formValidator(this.form).setEventListeners();
    this.form.addEventListener('submit', this._handleAuthSubmit);
    this._regLink = this._popupContent.querySelector('.popup__reg-link');
    this._regLink.addEventListener('click', this.close);
    this._regLink.addEventListener('click', this._authPopupOpen);
  }

  _removeEventListeners = () => {
    this._formValidator(this.form).removeEventListeners();
    this._popupContent.querySelector('.popup__close').removeEventListener('click', this.close);
    this._regLink.removeEventListener('click', this.close);
  }

  _handleAuthSubmit = (event) => {
    event.preventDefault();
    this._api.regUser(this.form.email.value, this.form.password.value, this.form.name.value)
      .then((obj) => {
        this.cardlist.addNewCard(obj);
        buttonText.textContent = '+';
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
