import BaseComponent from './BaseComponent';

export default class Header extends BaseComponent {
  constructor({ getUserInfo }) {
    super();
    this._getUserInfo = getUserInfo;
    this._loginButton = document.querySelector('.header__button_type_login');
    this._logoutButton = document.querySelector('.header__button_type_logout');
    this._loginName = document.querySelector('.header__auth-name');
    this._savedPages = document.querySelector('.header__saved-page');
    this._articlesInfoName = document.querySelector('.articles-info__name');
    this.render = this.render.bind(this);
  }

  async render() {
    if (localStorage.token) {
      try {
        const data = await this._getUserInfo();
        this._logIn(data);
      } catch (err) {
        console.log(err);
      }
    }
  }

  _logIn = (data) => {
    this._savedPages.classList.add('header__saved-page_visible');
    if (this._loginButton) this._loginButton.classList.remove('header__button_active');
    this._logoutButton.classList.add('header__button_active');
    if (this._articlesInfoName) this._articlesInfoName.textContent = data.name;
    this._loginName.textContent = data.name;
    this._logoutButton.addEventListener('click', this._logOut);
  }

  _logOut = () => {
    localStorage.removeItem('token');
    this._savedPages.classList.remove('header__saved-page_visible');
    this._loginButton.classList.add('header__button_active');
    this._logoutButton.classList.remove('header__button_active');
    this._logoutButton.removeEventListener('click', this._logOut);
  }

  // authorizedHeader() {
  //   this.render();
  //   // this._loginButton.classList.remove('header__button_active');
  //   // this._logoutButton.classList.add('header__button_active');
  //   // this._logoutButton.addEventListener('click', () => {
  //   //   localStorage.removeItem('token');
  //   //   this.render();
  //   // });
  // }


}
