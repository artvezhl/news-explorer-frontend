import Popup from './Popup';

export default class PopupMobile extends Popup {

  constructor(props) {
    super(props);
    this._api = props.api;
    this._savedPages = document.querySelectorAll('.popup-mobile__link')[1];
    this._logoutButton = document.querySelector('.popup-mobile__button_type_logout');
    this._authName = document.querySelector('.popup-mobile__auth-name');
    this._userName = '';
    this._authButton = document.querySelector('.popup-mobile__button');
  }

  open = () => {
    super.open();
    this._handlePopupOpen();
  }

  setEventListeners = () => {
    super.setEventListeners();
  }

  _handlePopupOpen = () => {
    if (localStorage.token) {
      this._authButton.classList.remove('popup-mobile__button_active');
      this._savedPages.classList.add('popup-mobile__link_visible');
      this._logoutButton.classList.add('header__button_active');
      this._userName = this._header.userName;
      if (!this._userName) {
        this._setUserName()
          .then((data) => {
            this._userName = data.name;
            this._authName.textContent = this._userName;
          });
      } else {
        this._authName.textContent = this._userName;
      }
      this._logoutButton.addEventListener('click', this._logOut);
    } else {
      this._logoutButton.classList.remove('header__button_active');
      this._authButton.classList.add('popup-mobile__button_active');
      this._savedPages.classList.remove('popup-mobile__link_visible');
    }
  }

  _setUserName = async () => {
    try {
      const data = await this._api.getUserInfo();
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  _logOut = () => {
    localStorage.removeItem('token');
    this._userName = '';
    this._logoutButton.removeEventListener('click', this._logOut);
    this.close();
    window.open('../../index.html', '_self');
  }

  close = () => {
    super.close();
  }
}
