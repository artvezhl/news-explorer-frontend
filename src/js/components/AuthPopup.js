import Popup from './Popup';

class AuthPopup extends Popup {

  constructor(props) {
    super(props);
  }

  _setContent() {
    super._setContent();
    // if (this._buttonClassList.contains('header__button_type_login')) {
    //   this._container.appendChild(this._loginPopupContent);
    // }
  }

  open = () => {
    super.open();
    // console.log(this._signUpPopupOpen);
    this._link.addEventListener('click', this._signUpPopupOpen);
  }

  // setEventListeners = () => {
  //   super.setEventListeners();
  //   this._link.addEventListener('click', this._signUpPopupOpen);
  // }

  // _handleAuthSubmit = (event) => {
  //   super._handleAuthSubmit(event);
  //   event.preventDefault();
  //   // const user =
  //   this._api.signIn(this._form.email.value, this._form.password.value)
  //     .then((data) => {
  //       console.log(data);
  //       localStorage.setItem('token', data.token);
  //       this._resetForm();
  //       this.close();
  //       this._renderHeader();
  //     })
  //     .catch(err => console.log(err));
  // }

  close = () => {
    this._link.removeEventListener('click', this._signUpPopupOpen);
    super.close();
  }
}

export default AuthPopup;
