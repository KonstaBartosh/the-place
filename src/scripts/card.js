import { deleteCard, handleLikeCard } from './api';
import { activeLikeSelector, modalConfirmDelete } from './constants';
import { closeModal, openModal } from './modal';
import { getUserContext } from './userState';

const cardsList = document.querySelector('.places__list');

function getTemplate() {
  const template = document
    .querySelector('#card-template')
    .content
    .querySelector('.card')
    .cloneNode(true);

  return template;
}

function createCard(card) {
  const user = getUserContext();
  
  const { name, link, owner, _id, likes } = card;

  const cardItem = getTemplate();
  const cardImage = cardItem.querySelector('.card__image');
  const cardTitle = cardItem.querySelector('.card__title');
  const cardDeleteButton = cardItem.querySelector('.card__delete-button');
  const cardLikeButton = cardItem.querySelector('.card__like-button');
  const cardLikeCounter = cardItem.querySelector('.card__like-counter');

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;

  if (owner._id !== user._id) {
    cardDeleteButton.remove();
  }

  if (likes) {
    cardLikeCounter.textContent = likes.length;
  }

  if (likes.some(like => like._id === user._id)) {
    cardLikeButton.classList.add(activeLikeSelector);
  }

  if (cardDeleteButton) {
    cardDeleteButton.addEventListener('click', () =>  {
      openModal(modalConfirmDelete);

      const buttonDelete = modalConfirmDelete.querySelector('.popup__button');

      buttonDelete.addEventListener('click', () => {
        deleteCard(_id)
          .then(() => cardsList.removeChild(cardItem))
          .catch(err => console.error(err))
          .finally(() => closeModal(modalConfirmDelete));
      });
    });
  }

  if (cardLikeButton) {
    cardLikeButton.addEventListener('click', () => {
      const isLiked = cardLikeButton.classList.contains(activeLikeSelector)

      handleLikeCard(_id, isLiked)
        .then(card => {
          cardLikeButton.classList.toggle(activeLikeSelector);
          cardLikeCounter.textContent = card.likes.length;
        })
        .catch(err => console.error(err))
    })
  }
  
  return cardItem;
}

function handleOpenImage() {
  const modalWithImg = document.querySelector('.popup_type_image');
  const captionImage = modalWithImg.querySelector('.popup__caption');
  const popupImage = modalWithImg.querySelector('.popup__image')

  cardsList.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('card__image')) {
      popupImage.src = evt.target.src;
      captionImage.textContent = evt.target.alt;
      openModal(modalWithImg);
    }
  })
}

export { createCard, handleOpenImage };