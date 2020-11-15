import BaseComponent from './BaseComponent';

export class Header extends BaseComponent {
  constructor({ getUserInfo }) {
    super();
    this._getUserInfo = getUserInfo;
    this._loginButton = document.querySelector('.header__button_type_login');
    this._logoutButton = document.querySelector('.header__button_type_logout');
    this._loginName = document.querySelector('.header__auth-name');
    this.authorizedHeader = this.authorizedHeader.bind(this);
  }

  render() {
    this._getUserInfo()
      .then((data) => {
        console.log(data);
        if (data) {
          this._loginButton.classList.remove('header__button_active');
          this._logoutButton.classList.add('header__button_active');
          this._loginName.textContent = data.name;
        }
      });
  }

  authorizedHeader() {
    this.render();
    this._loginButton.classList.remove('header__button_active');
    this._logoutButton.classList.add('header__button_active');
  }
}
