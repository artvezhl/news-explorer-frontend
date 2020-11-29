// import BaseComponent from './BaseComponent';

class Popup {

  constructor(props) {
    this._container = props.container;
    this._formValidator = props.validator;
    this._api = props.api;
    this._successPopupOpen = props.successPopupOpen;
    this._renderHeader = props.renderHeader;
    this._formName = props.formName;
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _toggle() {
    this._container.classList.toggle('popup_is-opened');
  }

  open() {
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
  }

  setEventListeners() {
    this._popup.querySelector('.popup__close').addEventListener('click', this.close);
    // this._link = this._popup.querySelector('.popup__link');
    this._form.addEventListener('submit', this._handleSubmit);
    // this._form.addEventListener('submit', event => {
    //   event.preventDefault();
    //   console.log('12345');
    // });

    // this._link.addEventListener('click', () => {
    //   console.log(this);
    //   this.close().then(() => this._signUpPopupOpen())
    // });
    // const linkClickHandler = () => {
    //   console.log(this.close);
    //   this.close.then(() => this.open());
    // }
    // this._link.addEventListener('click', linkClickHandler);
    // this._link.addEventListener('click', this.popupLinkHandler);
    // this._link.addEventListener('click', this.close);
    // this._link.addEventListener('click', () => {
    //   this.close();
    //   this._signUpPopupOpen();
    // })
  }

  _handleSubmit(event) {
    event.preventDefault();
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
    // this._link.removeEventListener('click', this.open);
// this._link.removeEventListener('click', this._signUpPopupOpen);
  }
}

export default Popup;
