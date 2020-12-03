import Popup from "./Popup";

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

  //
  // _removeEventListeners = () => {
  //   this._formValidator(this.form).removeEventListeners();
  //   this._popupContent.querySelector('.popup__close').removeEventListener('click', this.close);
  //   this._authLink.removeEventListener('click', this.close);
  // }
  //
  async _handleSubmit(event) {
    super._handleSubmit(event);
    try {
      await this._api.signUp(this._form.email.value, this._form.password.value, this._form.name.value);
      this._resetForm();
      this.close();
      this._successPopupOpen();
    } catch (err) {
      this._popup.querySelector('.error-message__error').textContent = err.message;
    }

    // if (result) {
    //   console.log('OK')
    // } else {
    //   console.log('ERROR')
    // }
    // console.log('------------------------------------');
    // console.log(result);
    // console.log('------------------------------------');
    // this._api.signUp(this._form.email.value, this._form.password.value, this._form.name.value)
    //   .then((data) => {
    //     console.log(data);
    //     this._resetForm();
    //     this.close();
    //     this._successPopupOpen();
    //   })
    //   .catch(err => {
    //     console.log('err');
    //     this._popup.querySelector('.error-message__error').textContent = err.message;
    //   });
  }
  //
  // close = () => {
  //   super.close();
  //   this._removeEventListeners();
  //   this._container.removeChild(this._popupContent);
  // }
}

export default PopupSignup;
