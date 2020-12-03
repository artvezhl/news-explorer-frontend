import Popup from "./Popup";

class PopupSuccess extends Popup {
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

  // _toggle = () => {
  //   this._container.classList.toggle('popup_is-opened');
  // }
  //
  // open = () => {
  //   super.open();
  // }
  //
  // _setEventListeners = () => {
  //   this._popupContent.querySelector('.popup__close').addEventListener('click', this.close);
  //   this._authLink = this._popupContent.querySelector('.popup__reg-link');
  //   // this._authLink.addEventListener('click', this.close);
  //   this._authLink.addEventListener('click', () => console.log(this._authPopupOpen));
  // }
  //
  // close = () => {
  //   this._toggle();
  //   this._popupContent.querySelector('.popup__close').removeEventListener('click', this.close);
  //   this._authLink.removeEventListener('click', this.close);
  //   this._authLink.removeEventListener('click', this._authPopupOpen);
  //   this._container.removeChild(this._popupContent);
  // }
}

export default PopupSuccess;
