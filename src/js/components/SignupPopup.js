import Popup from "./Popup";

class SignupPopup extends Popup {

  constructor(props) {
    super(props);
  }

  _setContent() {
    super._setContent();
    // if (this._buttonClassList.contains('popup__link_place_auth-popup')) {
    //   this._container.appendChild(this._signUpPopupContent);
    // }
  }

  open = () => {
    super.open();
  }

  setEventListeners = () => {
    super.setEventListeners();
    console.log(this._link);
    console.log(this);
    this._link.addEventListener('click', this._signInPopupOpen);
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
  // _handleAuthSubmit = (event) => {
  //   event.preventDefault();
  //   this._api.signUp(this.form.email.value, this.form.password.value, this.form.name.value)
  //     .then(() => {
  //       this._resetForm();
  //       this.close();
  //       this._successPopupOpen();
  //     })
  //     .catch(err => {
  //       this._popupContent.querySelector('.error-message__signup-err').textContent = err.message;
  //     });
  // }
  //
  // close = () => {
  //   super.close();
  //   this._removeEventListeners();
  //   this._container.removeChild(this._popupContent);
  // }
}

export default SignupPopup;
