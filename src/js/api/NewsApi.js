export default class NewsApi {
  constructor(newsConfig) {
    this._url = newsConfig.url;
    this._formatDate = newsConfig.formatDate;
  }

  getNews = async (stringToFind) => {
    let result = await fetch(this._url(stringToFind));
    if (result) {
      result = await result.json();
      const articles = [];
      result.articles.forEach(item => {
        const article = {};
        article.title = item.title;
        article.text = item.description;
        article.date = this._formatDate(item.publishedAt);
        article.image = item.urlToImage;
        article.source = item.source.name;
        article.link = item.url;
        articles.push(article);
      });
      return articles;
    }
    const json = result.json();
    return json.then(Promise.reject.bind(Promise));
  }
}
