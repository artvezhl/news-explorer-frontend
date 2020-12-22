import Popup from './Popup';

export default class PopupMobile extends Popup {

  constructor(props) {
    super(props);
  }

  open = () => {
    super.open();
  }

  setEventListeners = () => {
    super.setEventListeners();
    // this._popup.querySelector('.popup-mobile__menu').addEventListener('click', this.close);
  }

  // async _handleSubmit(event) {
  //   super._handleSubmit(event);
  //   try {
  //     if (isEmail(this._form.email.value)) {
  //       const data = await this._api.signIn(this._form.email.value, this._form.password.value);
  //       localStorage.setItem('token', data.token);
  //       this._renderHeader();
  //     } else {
  //       throw Error;
  //     }
  //     this._resetForm();
  //     this.close();
  //   } catch (err) {
  //     this._popup.querySelector('.error-message__error').textContent = err.message;
  //   }
  // }

  close = () => {
    super.close();
  }
}
