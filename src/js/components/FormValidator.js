export class FormValidator {

  constructor(form) {
    this._form = form;
  }

  checkInputValidity(event) {
    const input = event.target;
    const errorElem = input.nextElementSibling;
    input.setCustomValidity('');
    if (input.validity.valueMissing) {
      input.setCustomValidity('Это обязательное поле');
    }
    if (input.validity.tooShort) {
      input.setCustomValidity('Пароль должен быть не менее 8 символов');
    }
    if (input.validity.typeMismatch) {
      input.setCustomValidity('Неправильный формат email');
    }
    errorElem.textContent = input.validationMessage;
  }

  setSubmitButtonState() {
    const submitButton = this._form.querySelector('.button');
    submitButton.disabled = !this._form.checkValidity();
  }

  setEventListeners = () => {
    this._form.addEventListener('input', (event) => {
      this.checkInputValidity(event);
      this.setSubmitButtonState();
    });
  }

  removeEventListeners = () => {
    this._form.removeEventListener('input', (event) => {
      this.checkInputValidity(event);
      this.setSubmitButtonState();
    });
  }
}
