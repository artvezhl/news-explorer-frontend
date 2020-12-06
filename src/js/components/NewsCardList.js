import formatDate from "../utils/formatDate";
import { searchResultsArticles, searchResultsReady, loader, searchResultsEmpty } from "../constants";

export default class NewsCardList {
  constructor(props) {
    this._container = props.container;
    this._card = props.newsCard;
    this._searchResult = props.searchResults;
  }

  _clearCardList = () => {
    return searchResultsArticles.innerHTML = '';
  }

  // принимает массив экземпляров карточек и отрисовывает их
  async renderResults(string) {
    loader.classList.add('search-results__searching_active');
    searchResultsEmpty.classList.remove('search-results__empty_active');
    try {
      const cards = await this._searchResult(string);
      cards.articles.forEach((item) => {
        this.addCard(item);
      });
      if (!cards.articles.length) {
        searchResultsReady.classList.remove('search-results__ready_active');
        searchResultsEmpty.classList.add('search-results__empty_active');
      } else {
        searchResultsReady.classList.add('search-results__ready_active');
      }
      loader.classList.remove('search-results__searching_active');
    } catch (err) {
      console.log(err);
    }


    // const result = await this._searchResult(string);
    // console.log('------------------');
    // console.log(result.articles);
    // return result.articles.forEach(article => {
    //   this._container.appendChild(this._cardTemplate);
    //   this._cardTemplate.querySelector('.article__image').setAttribute('src', article.urlToImage);
    //   this._cardTemplate.querySelector('.article__date').textContent = formatDate(article.publishedAt);
    //   this._cardTemplate.querySelector('.article__title').textContent = article.title;
    //   this._cardTemplate.querySelector('.article__subtitle').textContent = article.description;
    //   this._cardTemplate.querySelector('.article__source').textContent = article.source.name;
    // })
  }

  // отвечает за отрисовку лоудера
  renderLoader() {

  }

  // принимает объект ошибки и показывает ошибку в интерфейсе
  renderError() {

  }

  // отвечает за функциональность кнопки «Показать ещё»
  showMore() {

  }

  // принимает экземпляр карточки и добавляет её в список
  addCard(data) {
    this._container.appendChild(this._card.create(data, formatDate));
  }

  _setHandlers() {

  }
}