import Popup from './Popup';

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
      const data = await this._api.signIn(this._form.email.value, this._form.password.value);
      localStorage.setItem('token', data.token);
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
