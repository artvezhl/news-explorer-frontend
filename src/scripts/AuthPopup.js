import { Popup } from './Popup';

export class AuthPopup extends Popup {
  static _template = document.querySelector('#auth-popup').content;

  constructor(popupContainer, formValidator, regPopupOpen) {
    super(popupContainer);
    this._popupContent = AuthPopup._template.cloneNode(true).children[0];
    this._formValidator = formValidator;
    this._regPopupOpen = regPopupOpen;
    // this._api = api;
  }

  open = () => {
    super.open();
    this._container.appendChild(this._popupContent);
    this._setEventListeners();
    // this.form.addEventListener('submit', this._handleAuthSubmit);
    this.form.querySelector('.button').setAttribute('disabled', 'true');
  }

  _setEventListeners = () => {
    this._popupContent.querySelector('.popup__close').addEventListener('click', this.close);
    this.form = document.forms.auth;
    this._formValidator(this.form).setEventListeners();
    this._popupContent.querySelector('.popup__reg-link').addEventListener('click', () => {
      this.close();
      this._regPopupOpen();
    });
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
    this._popupContent.querySelector('.popup__close').removeEventListener('click', this.close);

    this._container.removeChild(this._popupContent);
  }
}
