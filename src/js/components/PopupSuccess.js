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
}

export default PopupSuccess;
