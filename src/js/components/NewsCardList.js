import { searchResultsArticles, loader } from "../constants";

export default class NewsCardList {
  constructor(props) {
    this._container = props.container;
    this._card = props.newsCard;
  }

  // принимает экземпляр карточки и добавляет её в список
  addCard(data, string) {
    this._container.appendChild(this._card.create(data, string));
  }

  cardsNumberRender() {
    if (document.querySelector('.articles-info__number'))
      document.querySelector('.articles-info__number').textContent =
        `, у вас ${this._cards.length} сохранённых статей`;
  }

  keywordsRender() {
    const keywords = document.querySelectorAll('.articles-info__keywords_weight_bold');
    let keywordsArr = [];
    this._cards.forEach(card => keywordsArr.push(card.keyword));
    keywordsArr = [...new Set(keywordsArr)];
    keywords[0].textContent = keywordsArr[0];
    keywords[1].textContent = keywordsArr[1];
    keywords[2].textContent = `${keywordsArr.length - 2}-м другим словам`;
  }

  // принимает массив экземпляров карточек и отрисовывает их
  renderResults(cards, string) {
    // if (loader) loader.classList.add('search-results__searching_active');
    // if (searchResultsEmpty) searchResultsEmpty.classList.remove('search-results__empty_active');
    // console.log(cards);
    this._cards = cards;
    cards.forEach((item) => {
      this.addCard(item, string);
    })
      // .then(() => {
      // this._card.onload = this.showMore();
    // });
    // this._cardsNumberRender(cards.length);
    // this._keywordsRender(cards);
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
    console.log(document.getElementsByClassName('article'));
    // window.onload = function () {
    //   var box=document.getElementsByClassName('box');
    //   var btn=document.getElementById('button');
    //   for (let i=10;i<box.length;i++) {
    //     box[i].style.display = "none";
    //   }
    //
    //   var countD = 10;
    //   btn.addEventListener("click", function() {
    //     var box=document.getElementsByClassName('box');
    //     countD += 10;
    //     if (countD <= box.length){
    //       for(let i=0;i<countD;i++){
    //         box[i].style.display = "block";
    //       }
    //     }
    //
    //   })
    // }
  }

  _setHandlers() {

  }
}