import Popup from './Popup';

class PopupSignIn extends Popup {

  constructor(props) {
    super(props);
  }

  open = () => {
    super.open();
  }

  setEventListeners = () => {
    super.setEventListeners();
  }

  // _handleSubmit = (event) => {
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
    super.close();
  }
}

export default PopupSignIn;
