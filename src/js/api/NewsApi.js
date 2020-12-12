export default class NewsApi {
  constructor(newsConfig) {
    this._url = newsConfig.url;
  }

  getNews = async (stringToFind) => {
    let result = await fetch(this._url(stringToFind));
    if (result) {
      result = await result.json();
      return result.articles;
    }
    const json = result.json();
    return json.then(Promise.reject.bind(Promise));
  }
}
