// import BaseComponent from './BaseComponent';

class Popup {
  // static _template = document.querySelector('#popup').content;
  static _loginPopupTemplate = document.querySelector('#auth-popup').content;
  static _signUpPopupTemplate = document.querySelector('#reg-popup').content;

  constructor(props) {
    // super(props);
    this._container = props.container;
    // this._popupContent = Popup._template.cloneNode(true).children[0];
    this._loginPopupContent = Popup._loginPopupTemplate.cloneNode(true).children[0];
    this._signUpPopupContent = Popup._signUpPopupTemplate.cloneNode(true).children[0];
    this._formValidator = props.validator;
    this._signInPopupOpen = props.signInPopupOpen;
    this._signUpPopupOpen = props.signUpPopupOpen;
    this._api = props.api;
    this._renderHeader = props.renderHeader;
    this._formName = props.formName;
  }

  _toggle() {
    this._container.classList.toggle('popup_is-opened');
  }

  // вставляет в попап содержимое, например, форму входа или сообщение об успешной регистрации
  _setContent() {
    this._buttonClassList = event.target.classList;
    if (this._buttonClassList.contains('header__button_type_login')) {
      this._container.appendChild(this._loginPopupContent);
    }
    if (this._buttonClassList.contains('popup__link_place_auth-popup')) {
      this._container.appendChild(this._signUpPopupContent);
    }
  }

  _removeContent() {
    this._container.removeChild(this._popup);
  }

  popupLinkHandler(event) {
    console.log(event.target);
  }

  open() {
    this._setContent();
    this._toggle();
    this._popup = this._container.querySelector('.popup__background');
    this._formHandler(this._formName);
    this.setEventListeners();
  }

  _formHandler = (formName) => {
    if (formName) {
      this._form = document.forms[formName];
      this._form.querySelector('.button').setAttribute('disabled', 'true');
      this._formValidator(this._form).setEventListeners();
    }

    // if (formName === 'auth') {
    //   this._form = document.forms[formName];
    //   this._form.querySelector('.button').setAttribute('disabled', 'true');
    //   this._formValidator(this._form).setEventListeners();
    //   // this._form.addEventListener('submit', this._handleAuthSubmit(event));
    // }
    // if (formName === 'reg') {
    //   this._form = document.forms[formName];
    //   this._form.querySelector('.button').setAttribute('disabled', 'true');
    //   this._formValidator(this._form).setEventListeners();
    //   // this._form.addEventListener('submit', this._handleAuthSubmit(event));
    // }
  }

  _handleAuthSubmit = (event) => {
    event.preventDefault();
    console.log('12345');
  }

  setEventListeners() {
    this._popup.querySelector('.popup__close').addEventListener('click', this.close);
    this._link = this._popup.querySelector('.popup__link');
    // this._form.addEventListener('submit', this._handleAuthSubmit);
    // this._link.addEventListener('click', () => {
    //   console.log(this);
    //   this.close().then(() => this._signUpPopupOpen())
    // });
    this._link.addEventListener('click', this.close);
    // this._link.addEventListener('click', () => {
    //   this.close();
    //   this._signUpPopupOpen();
    // })
  }

  // _anotherPopupOpen = (event) => {
  //   event
  // }

  /* TODO: Можно лучше: разобраться с закрытием на Esc и на клик в пустое поле */
  // window.addEventListener('keydown', (e) => {
  //   console.log(e.keyCode);
  //   console.log(e.target);
  //   if (e.keyCode == 27 || e.target == this._container) this.close();
  // });

  // this._container.addEventListener('click', (e) => {
  //   if (e.keyCode == 27 || e.target == this._container) this.close();
  //   // else if (e.target == this._container) this.close();
  // })

  _resetForm() {
    this._form.reset();
  }

// Реализовать закрытие попапа по клику на Escape(keycode = 27), либо по клику вне попапа
// Подробнее можно узнать здесь: https://stackoverflow.com/questions/1481626/how-to-handle-esc-keydown-on-javascript-popup-window

  close() {
    this._removeListeners();
    this._removeContent();
    this._toggle();
    if (this._formName) {
      this._resetForm();
      this._resetFormErrors();
    }
  }

  _resetFormErrors() {
    const [...errorElements] = this._form.querySelectorAll('.error-message');
    errorElements.forEach((elem) => {
      elem.textContent = "";
    });
  }

  _removeListeners() {
    this._popup.querySelector('.popup__close').removeEventListener('click', this.close);
    this._link.removeEventListener('click', this.close);
    // this._link.removeEventListener('click', this._signUpPopupOpen);
  }
}

export default Popup;
