const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  }
];
const modal = document.querySelector('.popup');
const modalNewCard = document.querySelector('.popup_type_new-card');
const modalEditProfile = document.querySelector('.popup_type_edit');
const modalWithImg = document.querySelector('.popup_type_image')

const buttonNewCard = document.querySelector('.profile__add-button');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonCloseNewCard = modalNewCard.querySelector('.popup__close');
const buttonCloseProfile = modalEditProfile.querySelector('.popup__close');
const buttonCloseImage = modalWithImg.querySelector('.popup__close');

const inputTitleNewCard = modalNewCard.querySelector('.popup__input_type_card-name');
const inputUrlNewCard = modalNewCard.querySelector('.popup__input_type_url');

const cardsList = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

function openModalHandler(button, modal) {
  button.addEventListener('click', function() {
    modal.classList.add('popup_is-opened');
  });
}

function closeModalHandler(button, modal) {
  button.addEventListener('click', function() {
    modal.classList.remove('popup_is-opened');
  });
}

function handleDeleteCard() {
  cardsList.addEventListener('click', function(evt) {
    const target = evt.target;

    if (target.classList.contains('card__delete-button')) {
      target.closest('.card').remove();
    }
  });
}

function handleLikeCard() {
  cardsList.addEventListener('click', function(evt) {
    const target = evt.target;

    if (target.classList.contains('card__like-button')) {
      target.classList.toggle('card__like-button_is-active');
    }
  });
}

function handleOpenImage() {
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

function renderCards(cards) {
  cards.forEach(card => {
    const cardItem = cardTemplate.querySelector('.card').cloneNode(true);
  
    cardItem.querySelector('.card__image').src = card.link;
    cardItem.querySelector('.card__image').alt = card.name;
    cardItem.querySelector('.card__title').textContent = card.name;

    cardsList.append(cardItem);
  });
}

renderCards(initialCards);

handleDeleteCard();
handleLikeCard();
handleOpenImage();

openModalHandler(buttonNewCard, modalNewCard);
openModalHandler(buttonEditProfile, modalEditProfile);

closeModalHandler(buttonCloseNewCard, modalNewCard);
closeModalHandler(buttonCloseProfile, modalEditProfile);
closeModalHandler(buttonCloseImage, modalWithImg);
