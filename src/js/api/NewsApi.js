export default class NewsApi {
  constructor(newsConfig) {
    this._url = newsConfig.url;
  }

  getNews = async (stringToFind) => {
    const result = await fetch(this._url(stringToFind));
    if (result) {
      return result.json();
    }
    const json = result.json();
    return json.then(Promise.reject.bind(Promise));
  }
}
