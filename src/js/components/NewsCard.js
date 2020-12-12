export default class NewsCard {
  static _template = document.querySelector('#article').content;

  constructor(props) {
    this._api = props.api;
  }

  // отвечает за отрисовку иконки карточки.
  // У этой иконки три состояния: иконка незалогиненного пользователя,
  // активная иконка залогиненного, неактивная иконка залогиненного
  _renderIcon(card) {
    if (!localStorage.token) card.querySelector('.article__like-button').setAttribute('disabled', 'disabled');
    // event.target.classList.toggle('article__like-button_active');
  }

  // метод отрисовки карточек с сервера
  create(article, formatDate, string) {
    this._card = NewsCard._template.cloneNode(true).children[0];
    this._card.setAttribute('keyword', string);
    if (article.urlToImage) this._card.querySelector('.article__image').setAttribute('src', article.urlToImage);
    this._card.querySelector('.article__date').textContent = formatDate(article.publishedAt);
    this._card.querySelector('.article__title').textContent = article.title;
    this._card.querySelector('.article__subtitle').textContent = article.description;
    this._card.querySelector('.article__source').textContent = article.source.name;
    this._card.querySelector('.article__source').setAttribute('href', article.url);
    this._renderIcon(this._card);
    this._setListeners(this._card);

    return this._card;
  }

  _setListeners = (card) => {
    let cardButton;
    card.querySelector('.article__like-button')
      ? cardButton = card.querySelector('.article__like-button')
      : cardButton = card.querySelector('.article__remove-button');
    cardButton.addEventListener('mouseover', () => this._buttonHoverHandler(card));
    cardButton.addEventListener('mouseout', () => this._buttonHoverHandler(card));
    cardButton.addEventListener('click', this._like);
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


  _like = async (event) => {
    const currentCard = event.target.closest('article');
    console.log(currentCard);
    const cardInfo = {
      keyword: currentCard.getAttribute('keyword'),
      title: currentCard.querySelector('.article__title').textContent,
      text: currentCard.querySelector('.article__subtitle').textContent,
      date: currentCard.querySelector('.article__date').textContent,
      source: currentCard.querySelector('.article__source').textContent,
      link: currentCard.querySelector('.article__source').getAttribute('href'),
      imageUrl: currentCard.querySelector('.article__image').getAttribute('src'),
    };
    // console.log(cardInfo)
    // const cardId = currentCard.getAttribute('data-id');
    // event.preventDefault();
    try {
      await this._api.addNewsCard(cardInfo);
      event.target.classList.add('article__like-button_active');
    } catch(err) {
      console.log(err);
    }
    // // await this._api.addNewsCard(cardInfo)
    // //   .then((obj) => {
    //     event.target.classList.toggle('place-card__like-icon_liked');
    //     this._cardLikes.textContent = obj.likes.length;
    //   })
    //   .catch(err => console.log(err));
  }
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