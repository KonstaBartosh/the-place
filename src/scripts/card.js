const cardsList = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

export function createCard(name, link) {
  const cardItem = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardItem.querySelector('.card__image');

  cardImage.src = link;
  cardImage.alt = name;
  cardItem.querySelector('.card__title').textContent = name;

  return cardItem;
}

export function handleDeleteCard() {
  cardsList.addEventListener('click', function(evt) {
    const target = evt.target;

    if (target.classList.contains('card__delete-button')) {
      target.closest('.card').remove();
    }
  });
}

export function handleLikeCard() {
  cardsList.addEventListener('click', function(evt) {
    const target = evt.target;

    if (target.classList.contains('card__like-button')) {
      target.classList.toggle('card__like-button_is-active');
    }
  });
}

export function handleOpenImage() {
  const modalWithImg = document.querySelector('.popup_type_image');
  const captionImage = modalWithImg.querySelector('.popup__caption');
  const popupImage = modalWithImg.querySelector('.popup__image')

  cardsList.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('card__image')) {
      popupImage.src = evt.target.src;
      captionImage.textContent = evt.target.alt;
      modalWithImg.classList.add('popup_is-opened');
    }
  })
}