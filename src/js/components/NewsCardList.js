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
  renderResults(cards, string) {
    console.log(cards);
    // if (loader) loader.classList.add('search-results__searching_active');
    // if (searchResultsEmpty) searchResultsEmpty.classList.remove('search-results__empty_active');
    cards.forEach((item) => {
      this.addCard(item, string);
    });
    // if (!cards.length) {
    //   searchResultsReady.classList.remove('search-results__ready_active');
    //   searchResultsEmpty.classList.add('search-results__empty_active');
    // } else {
    //   searchResultsReady.classList.add('search-results__ready_active');
    // }
    // loader.classList.remove('search-results__searching_active');
  }

  // отвечает за отрисовку лоудера
  renderLoader() {
    loader.classList.toggle('search-results__searching_active');
  }

  // принимает объект ошибки и показывает ошибку в интерфейсе
  renderError() {

  }

  // отвечает за функциональность кнопки «Показать ещё»
  showMore() {
//     const items = [...this._container.querySelectorAll('article')];
//     const showMoreButton = this._container.querySelector('.search-results__button');
//     let visible = items.length;
//
// // show/hide items according to n of visible
//     const showHide = n => {
//       items.forEach((item, i) => {
//         if (i < n) {
//           if (!item.parentElement) ul.appendChild(li);
//         } else {
//           if (item.parentElement) ul.removeChild(li);
//         }
//       });
//       return n;
//     }
//
//     visible = showHide(3);
//
//     showMoreButton.addEventListener('click', () => {
//       visible = showhide(Math.min(visible + 3, items.length))
//       if (visible >= items.length) moar.innerText = "Больше нет";
//     });
//
//
//
//     items.forEach((li, i) => {
//       if (i < n) {
//         if (!li.parentElement) ul.appendChild(li);
//       } else {
//         if (li.parentElement) ul.removeChild(li);
//       }
//     });
//     return n;
  }

  // принимает экземпляр карточки и добавляет её в список
  addCard(data, string) {
    this._container.appendChild(this._card.create(data, formatDate, string));
  }

  _setHandlers() {

  }
}