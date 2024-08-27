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

  const cardElement = getTemplate();
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const buttonRemove = cardElement.querySelector('.card__delete-button');
  const buttonLike = cardElement.querySelector('.card__like-button');
  const likeCounter = cardElement.querySelector('.card__like-counter');

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;

  // showing remove btn icon only when user create it
  if (owner._id !== user._id) {
    buttonRemove.remove();
  }

  // showing ammount of likes
  if (likes) {
    likeCounter.textContent = likes.length;
  }

  // showing like btn icon only when user put it
  if (likes.some(like => like._id === user._id)) {
    buttonLike.classList.add(activeLikeSelector);
  }

  // removing card
  if (buttonRemove) {
    buttonRemove.addEventListener('click', () =>  {
      openModal(modalConfirmDelete);

      const buttonDelete = modalConfirmDelete.querySelector('.popup__button');

      buttonDelete.addEventListener('click', () => {
        deleteCard(_id)
          .then(() => cardsList.removeChild(cardElement))
          .catch(err => console.error(err))
          .finally(() => closeModal(modalConfirmDelete));
      });
    });
  }

  // likes handler
  if (buttonLike) {
    buttonLike.addEventListener('click', () => {
      const isLiked = buttonLike.classList.contains(activeLikeSelector)

      handleLikeCard(_id, isLiked)
        .then(card => {
          buttonLike.classList.toggle(activeLikeSelector);
          likeCounter.textContent = card.likes.length;
        })
        .catch(err => console.error(err))
    })
  }
  
  return cardElement;
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