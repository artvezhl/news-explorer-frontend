export default class NewsCard {
  static _template = document.querySelector('#article').content;

  constructor(props) {
    this._api = props.api;
  }

  // отвечает за отрисовку иконки карточки.
  // У этой иконки три состояния: иконка незалогиненного пользователя,
  // активная иконка залогиненного, неактивная иконка залогиненного
  _renderIcon(card) {
    if (!localStorage.token) {
      card.querySelector('.article__like-button').setAttribute('disabled', 'disabled');
    }
  }

  // метод отрисовки карточек с сервера
  create(article, string) {
    this._card = NewsCard._template.cloneNode(true).children[0];
    string ?
      this._card.setAttribute('keyword', string) :
      this._card.setAttribute('data-id', article._id);
    if (article.image) this._card.querySelector('.article__image').setAttribute('src', article.image);
    if (this._card.querySelector('.article__keyword')) this._card.querySelector('.article__keyword').textContent = article.keyword;
    this._card.querySelector('.article__date').textContent = article.date;
    this._card.querySelector('.article__title').textContent = article.title;
    this._card.querySelector('.article__subtitle').textContent = article.text;
    this._card.querySelector('.article__source').textContent = article.source;
    this._card.querySelector('.article__source').setAttribute('href', article.link);
    this._renderIcon(this._card);
    this._setListeners(this._card);

    return this._card;
  }

  _setListeners = (card) => {
    let cardButton;
    card.querySelector('.article__like-button')
      ? cardButton = card.querySelector('.article__like-button')
      : cardButton = card.querySelector('.article__remove-button');
    cardButton.addEventListener('mouseover', (event) => this._buttonHoverHandler(card, event));
    cardButton.addEventListener('mouseout', (event) => this._buttonHoverHandler(card, event));
    cardButton.classList.contains('article__like-button') ?
      cardButton.addEventListener('click', this._addCard) :
      cardButton.addEventListener('click', this._removeCard);
  }

  _buttonHoverHandler(card, event) {
    let appearText = card.querySelector('.article__appear-phrase');
    if(window.innerWidth > 1023) {
      card.querySelector('.article__appear-block').classList.toggle('article__appear-block_active');
    }
    if (localStorage.token) {
      appearText.textContent = 'Нажмите, чтобы сохранить статью';
    }
    if (!localStorage.token) {
      appearText.textContent = 'Войдите, чтобы сохранить статью';
    }
    if (localStorage.token && event.target.classList.contains('article__like-button_active')) {
      appearText.textContent = 'Нажмите, чтобы удалить статью';
    }
    if(localStorage.token && event.target.classList.contains('article__remove-button')) {
      appearText.textContent = 'Убрать из сохранённых';
    }
  }


  _addCard = async (event) => {
    const currentCard = event.target.closest('article');
    const cardInfo = {
      keyword: currentCard.getAttribute('keyword'),
      title: currentCard.querySelector('.article__title').textContent,
      text: currentCard.querySelector('.article__subtitle').textContent,
      date: currentCard.querySelector('.article__date').textContent,
      source: currentCard.querySelector('.article__source').textContent,
      link: currentCard.querySelector('.article__source').getAttribute('href'),
      imageUrl: currentCard.querySelector('.article__image').getAttribute('src'),
    };
    try {
      await this._api.addNewsCard(cardInfo);
      event.target.classList.add('article__like-button_active');
    } catch(err) {
      console.log(err);
    }
  }

  _removeCard = async (event) => {
    const currentCard = event.target.closest('article.article');
    const cardId = currentCard.getAttribute('data-id');
    event.preventDefault();
    try {
      await this._api.removeCard(cardId);
      this._removeListeners(currentCard);
      currentCard.parentElement.removeChild(currentCard);
    } catch (err) {
      console.log(err);
    }
  }

  _removeListeners = (currentCard) => {
    let cardButton = currentCard.querySelector('.article__remove-button');
    cardButton.removeEventListener('mouseover', (event) => this._buttonHoverHandler(card, event));
    cardButton.removeEventListener('mouseout', (event) => this._buttonHoverHandler(card, event));
    cardButton.removeEventListener('click', this._removeCard);
  }
}