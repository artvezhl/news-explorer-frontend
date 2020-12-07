export default class NewsCard {
  static _template = document.querySelector('#article').content;

  constructor() {

  }

  // отвечает за отрисовку иконки карточки.
  // У этой иконки три состояния: иконка незалогиненного пользователя,
  // активная иконка залогиненного, неактивная иконка залогиненного
  renderIcon() {

  }

  // constructor(data, popupOpenHandler, api) {
  //   this._data = data;
  //   this._popupOpenHandler = popupOpenHandler;
  //   this._api = api;
  // }

  // метод отрисовки карточек с сервера
  create(article, formatDate) {
    this._card = NewsCard._template.cloneNode(true).children[0];
    if (article.urlToImage) this._card.querySelector('.article__image').setAttribute('src', article.urlToImage);
    this._card.querySelector('.article__date').textContent = formatDate(article.publishedAt);
    this._card.querySelector('.article__title').textContent = article.title;
    this._card.querySelector('.article__subtitle').textContent = article.description;
    this._card.querySelector('.article__source').textContent = article.source.name;
    this._card.querySelector('.article__source').setAttribute('href', article.url);
    this._setListeners(this._card);

    return this._card;
  }

  _setListeners = (card) => {
    card.querySelector('.article__like-button').addEventListener('mouseover', () => this._buttonHoverHandler(card));
    card.querySelector('.article__like-button').addEventListener('mouseout', () => this._buttonHoverHandler(card));
  }

  _buttonHoverHandler(card) {
    let appearText = card.querySelector('.article__appear-phrase');
    if (localStorage.token) {
      appearText.textContent = 'Нажмите, чтобы сохранить статью';
    }
    if (!localStorage.token) {
      appearText.textContent = 'Войдите, чтобы сохранить статью';
    }
    if(window.innerWidth > 1023) {
      card.querySelector('.article__appear-block').classList.toggle('article__appear-block_active');
    }
  }


  // _like = (event) => {
  //   const currentCard = event.target.closest('div.place-card');
  //   const cardId = currentCard.getAttribute('data-id');
  //   event.preventDefault();
  //   this._api.setLike(cardId)
  //     .then((obj) => {
  //       event.target.classList.toggle('place-card__like-icon_liked');
  //       this._cardLikes.textContent = obj.likes.length;
  //     })
  //     .catch(err => console.log(err));
  // }
  //
  // _removeLike = (event) => {
  //   const currentCard = event.target.closest('div.place-card');
  //   const cardId = currentCard.getAttribute('data-id');
  //   event.preventDefault();
  //   this._api.removeLike(cardId)
  //     .then((obj) => {
  //       event.target.classList.toggle('place-card__like-icon_liked');
  //       this._cardLikes.textContent = obj.likes.length;
  //     })
  //     .catch(err => console.log(err));
  // }
  //
  // _removeListeners = () => {
  //   this._card.querySelector('.place-card__like-icon').removeEventListener('click', this._like);
  //   this._card.querySelector('.place-card__delete-icon').removeEventListener('click', this._remove);
  //   this._card.querySelector('.place-card__image').removeEventListener('click', this._popupOpenHandler);
  // }
}