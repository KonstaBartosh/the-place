const apiConfig = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: '3fea5f60-ca24-4403-9861-1d6a72c9cf2f',
    'Content-Type': 'application/json'
  }
}

const modalConfirmDelete = document.querySelector(".popup_type_confirm-delete");
const modalNewCard = document.querySelector(".popup_type_new-card");
const modalEditProfile = document.querySelector(".popup_type_edit");
const modalWithImg = document.querySelector(".popup_type_image");
const modalEditAvatar = document.querySelector(".popup_type_new-avatar");
const buttonNewCard = document.querySelector(".profile__add-button");
const buttonSelector = document.querySelectorAll('.popup__button');
const buttonEditProfile = document.querySelector(".profile__edit-button");
const buttonEditUserpic = document.querySelector(".profile__image-container");
const formProfile = document.forms["edit-profile"];
const formNewCard = document.forms["new-place"];
const formEditAvatar = document.forms["edit-avatar"];
const avatarInput = formEditAvatar.elements["avatar-link"];
const nameInput = formProfile.elements["name"];
const aboutInput = formProfile.elements["description"];
const cardTitleInput = formNewCard.elements["place-name"];
const cardUrl = formNewCard.elements["link"];
const nameElement = document.querySelector(".profile__title");
const aboutElement = document.querySelector(".profile__description");
const avatarElement = document.querySelector(".profile__image");
const cardsList = document.querySelector(".places__list");

export {
  apiConfig,
  modalConfirmDelete,
  modalEditAvatar,
  modalNewCard,
  modalEditProfile,
  modalWithImg,
  buttonSelector,
  buttonNewCard,
  buttonEditUserpic,
  buttonEditProfile,
  formProfile,
  formNewCard,
  formEditAvatar,
  nameInput,
  aboutInput,
  cardTitleInput,
  cardUrl,
  avatarInput,
  nameElement,
  aboutElement,
  avatarElement,
  cardsList,
};
