import Popup from './Popup';
import isEmail from "validator/es/lib/isEmail";

export default class PopupSignIn extends Popup {

  constructor(props) {
    super(props);
  }

  open = () => {
    super.open();
  }

  setEventListeners = () => {
    super.setEventListeners();
  }

  async _handleSubmit(event) {
    super._handleSubmit(event);
    try {
      if (isEmail(this._form.email.value)) {
        const data = await this._api.signIn(this._form.email.value, this._form.password.value);
        localStorage.setItem('token', data.token);
        this._renderHeader();
      } else {
        throw Error;
      }
      this._resetForm();
      this.close();
    } catch (err) {
      this._popup.querySelector('.error-message__error').textContent = err.message;
    }
  }

  close = () => {
    super.close();
  }
}
