import Popup from "./Popup";
import isEmail from "validator/es/lib/isEmail";

class PopupSignup extends Popup {

  constructor(props) {
    super(props);
  }

  open = () => {
    super.open();
  }

  setEventListeners = () => {
    super.setEventListeners();
  }

  close = () => {
    super.close();
  }

  async _handleSubmit(event) {
    super._handleSubmit(event);
    try {
      if (isEmail(this._form.email.value)) {
        await this._api.signUp(this._form.email.value, this._form.password.value, this._form.name.value);
      } else {
        throw Error;
      }
      this._resetForm();
      this.close();
      this._successPopupOpen();
    } catch (err) {
      this._popup.querySelector('.error-message__error').textContent = err.message;
    }
  }
}

export default PopupSignup;
