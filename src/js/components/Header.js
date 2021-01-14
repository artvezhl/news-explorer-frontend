import BaseComponent from './BaseComponent';

export default class Header extends BaseComponent {
  constructor({ getUserInfo }) {
    super();
    this._getUserInfo = getUserInfo;
    this.userName = '';
    this._isLoggedIn = false;
    this._loginButton = document.querySelector('.header__button_type_login');
    this._logoutButton = document.querySelector('.header__button_type_logout');
    this._loginName = document.querySelector('.header__auth-name');
    this._savedPages = document.querySelector('.header__saved-page');
    this._articlesInfoName = document.querySelector('.articles-info__name');
    this._headerMenuButton = document.querySelector('.header__mobile-menu');
    this._popups = document.querySelectorAll('.popup');
    this.render = this.render.bind(this);
  }

  async render() {
    if (localStorage.token) {
      try {
        const data = await this._getUserInfo();
        this.userName = data.name;
        this._logIn();
        this.mobileMenuButtonRender();
      } catch (err) {
        console.log(err);
      }
    }
  }

  _logIn = () => {
    this._savedPages.classList.add('header__saved-page_visible');
    if (this._loginButton) this._loginButton.classList.remove('header__button_active');
    this._logoutButton.classList.add('header__button_active');
    if (this._articlesInfoName) this._articlesInfoName.textContent = this.userName;
    this._loginName.textContent = this.userName;
    this._logoutButton.addEventListener('click', this._logOut);
  }

  _logOut = () => {
    localStorage.removeItem('token');
    this._savedPages.classList.remove('header__saved-page_visible');
    if (this._loginButton) this._loginButton.classList.add('header__button_active');
    this._logoutButton.classList.remove('header__button_active');
    this._logoutButton.removeEventListener('click', this._logOut);
    window.open('../../index.html', '_self');
  }

  mobileMenuButtonRender = () => {
    const popups = Object.values(this._popups);
    const popupsStatus = popups.every(popup => !popup.classList.contains('popup_is-opened'));
    (!popupsStatus) ? this._headerMenuButton.classList.remove('header__mobile-menu_active') :
      this._headerMenuButton.classList.add('header__mobile-menu_active');
    // (!popupsStatus) ? console.log(this._headerMenuButton.classList) :
    //   console.log(this._headerMenuButton.classList) && this._headerMenuButton.classList.add('header__mobile-menu_active');
    // console.log()
    // popups.forEach(popup => console.log(popup.classList.contains('popup_is-opened')));
    // console.log(popups.every(popup => !popup.classList.contains('popup_is-opened')));
  }
}
