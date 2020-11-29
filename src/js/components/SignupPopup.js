import Popup from "./Popup";

class SignupPopup extends Popup {

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
  _handleSubmit(event) {
    super._handleSubmit(event);
    console.log(this);
    this._api.signUp(this._form.email.value, this._form.password.value, this._form.name.value)
      .then(() => {
        this._resetForm();
        this.close();
        // this._successPopupOpen();
      })
      .catch(err => {
        this._popupContent.querySelector('.error-message__signup-err').textContent = err.message;
      });
  }
  //
  // close = () => {
  //   super.close();
  //   this._removeEventListeners();
  //   this._container.removeChild(this._popupContent);
  // }
}

export default SignupPopup;
