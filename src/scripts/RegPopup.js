import {Popup} from "./Popup";

export class RegPopup extends Popup {
  static _template = document.querySelector('#reg-popup').content;

  constructor(popupContainer, formValidator, authPopupOpen) {
    super(popupContainer);
    this._popupContent = RegPopup._template.cloneNode(true).children[0];
    this._formValidator = formValidator;
    this._authPopupOpen = authPopupOpen;
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
    this.form = document.forms.reg;
    this._formValidator(this.form).setEventListeners();
    this._popupContent.querySelector('.popup__reg-link').addEventListener('click', () => {
      this.close();
      this._authPopupOpen().bind(this);
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
