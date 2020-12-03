export default class MainApi {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  // метод проверки ответа сервера и преобразование из json
  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    const json = res.json();
    return json.then(Promise.reject.bind(Promise))
  }

// регистрация пользователя
  signUp = async (email, password, name) => {
    const result = await fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        email: email,
        password: password,
        name: name
      }),
    })
    return this._getResponseData(result);
  }

// авторизация
  signIn = async (email, password) => {
    const result = await fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    return this._getResponseData(result);
  }

  getUserInfo = async () => {
    const result = await fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    });
    return this._getResponseData(result);
  }

  // signIn = (email, password) => {
  //   fetch(`${this._url}/signin`, {
  //     method: 'POST',
  //     headers: this._headers,
  //     credentials: 'include',
  //     body: JSON.stringify({
  //       email: email,
  //       password: password,
  //     })
  //   })
  //     .then((data) => {
  //       localStorage.setItem('token', data.token);
  //     })
  //     .catch(err => console.log(err));
  // }

// запрос стартовых карточек с сервера
  // getInitialCards() {
  //   return fetch(`${this._url}/cards`, {
  //     headers: this._headers
  //   })
  //     .then(res => this._getResponseData(res));
  // }

  // добавление новой карточки на сервер
  // addNewCard(name, link) {
  //   return fetch(`${this._url}/cards`, {
  //     method: 'POST',
  //     headers: this._headers,
  //     body: JSON.stringify({
  //       name: name,
  //       link: link
  //     })
  //   })
  //     .then(res => this._getResponseData(res));
  // }

  // удаление карточки с сервера
  // removeCard(cardId) {
  //   return fetch(`${this._url}/cards/${cardId}`, {
  //     method: 'DELETE',
  //     headers: this._headers
  //   })
  //     .then(res => this._getResponseData(res));
  // }

  // постановка лайка
  // setLike(cardId) {
  //   return fetch(`${this._url}/cards/like/${cardId}`, {
  //     method: 'PUT',
  //     headers: this._headers
  //   })
  //     .then(res => this._getResponseData(res));
  // }

  // удаление лайка
  // removeLike(cardId) {
  //   return fetch(`${this._url}/cards/like/${cardId}`, {
  //     method: 'DELETE',
  //     headers: this._headers
  //   })
  //     .then(res => this._getResponseData(res));
  // }
}
