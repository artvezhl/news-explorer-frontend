import { BaseComponent } from './BaseComponent';

export class Popup extends BaseComponent {
  constructor(props) {
    super(props);
  }

  _toggle() {
    this._container.classList.toggle('popup_is-opened');
  }

  open() {
    this._toggle();

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
  }

  _resetForm() {
    this.form.reset();
  }

// Реализовать закрытие попапа по клику на Escape(keycode = 27), либо по клику вне попапа
// Подробнее можно узнать здесь: https://stackoverflow.com/questions/1481626/how-to-handle-esc-keydown-on-javascript-popup-window

  close() {
    this._toggle();
    this._resetForm();
    this._resetFormErrors();
  }

  _resetFormErrors() {
    const [...errorElements] = this.form.querySelectorAll('.error-message');
    errorElements.forEach((elem) => {
      elem.textContent = "";
    });
  }

  // _removeListeners() {
  //   window.removeEventListener('keydown', () => )
  // }
}
