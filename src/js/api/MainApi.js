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

// запрос стартовых карточек с сервера
  getInitialCards = async () => {
    const result = await fetch(`${this._url}/articles`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    });
    return this._getResponseData(result);
  }

  // добавление новой карточки на сервер
  addNewsCard = async (props) => {
    const result = await fetch(`${this._url}/articles`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        keyword: props.keyword,
        title: props.title,
        text: props.text,
        date: props.date,
        source: props.source,
        link: props.link,
        image: props.imageUrl,
      }),
      credentials: 'include',
    });
    return this._getResponseData(result);
  }

  // удаление карточки с сервера
  removeCard = async (cardId) => {
    const result = await fetch(`${this._url}/articles/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    })
    return this._getResponseData(result);
  }
}
