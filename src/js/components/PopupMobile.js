import Popup from './Popup';

export default class PopupMobile extends Popup {

  constructor(props) {
    super(props);
    this._savedPages = document.querySelectorAll('.popup-mobile__link')[1];
    this._logoutButton = document.querySelector('.popup-mobile__button_type_logout');
    this._authName = document.querySelector('.popup-mobile__auth-name');
  }

  open = () => {
    super.open();
    this._handlePopupOpen('Artemiy');
  }

  setEventListeners = () => {
    super.setEventListeners();
    // this._popup.querySelector('.popup-mobile__menu').addEventListener('click', this.close);
  }

  _handlePopupOpen = (data) => {
    if (localStorage.token) {
      console.log('12345');
      this._authButton.classList.remove('popup-mobile__button_active');
      this._savedPages.classList.add('popup-mobile__link_visible');
      this._logoutButton.classList.add('header__button_active');
      this._authName.textContent = data;
      // this._logoutButton.addEventListener('click', this._logOut);
    } else {
      console.log('54321');
      this._authButton.classList.add('popup-mobile__button_active');
      this._savedPages.classList.remove('popup-mobile__link_visible');
    }
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
