import './index.css';
import { initialCards } from '../src/scripts/constantants';
import { openModal, closeModal, closeByEscape, closeByOverlayClick } from './scripts/modal';
import { createCard, handleDeleteCard, handleLikeCard, handleOpenImage } from './scripts/card';

const modalNewCard = document.querySelector('.popup_type_new-card');
const modalEditProfile = document.querySelector('.popup_type_edit');
const modalWithImg = document.querySelector('.popup_type_image');

const buttonNewCard = document.querySelector('.profile__add-button');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonCloseNewCard = modalNewCard.querySelector('.popup__close');
const buttonCloseProfile = modalEditProfile.querySelector('.popup__close');
const buttonCloseImage = modalWithImg.querySelector('.popup__close');
const buttonSubmitCard = modalNewCard.querySelector('.button');
const buttonSubmitProfile = modalEditProfile.querySelector('.button');

const formProfile = document.forms['edit-profile'];
const formNewCard = document.forms['new-place'];
const nameInput = formProfile.elements['name'];
const jobInput = formProfile.elements['description'];
const cardTitleInput = formNewCard.elements['place-name'];
const cardUrl = formNewCard.elements['link'];

const nameElement = document.querySelector('.profile__title');
const jobElememnt = document.querySelector('.profile__description');

nameInput.value = nameElement.textContent;
jobInput.value = jobElememnt.textContent;

const cardsList = document.querySelector('.places__list');


function showInputError(input) {
  const errMessage = input.nextElementSibling;
  input.classList.add('popup__input_type-error');
  errMessage.classList.add('display');
  errMessage.textContent = input.validationMessage;
}

function hideInputError(input) {
  const errMessage = input.nextElementSibling;
  input.classList.remove('popup__input_type-error');
  errMessage.classList.remove('display');
  errMessage.textContent = '';
}

function validateForm(form) {
  const inputs = Array.from(form.querySelectorAll('.popup__input'));

  inputs.forEach((input) => {
    if(!input.validity.valid) {
      showInputError(input);
    } else {
      hideInputError(input);
    }
  });

  toggleButtonState(form);
}

function toggleButtonState(form) {
  const button = form.querySelector('.button');

  if (!form.checkValidity()) {
    button.setAttribute('disabled', true);
  } else {
    button.removeAttribute('disabled');
  }
}

formNewCard.addEventListener('input', () => validateForm(formNewCard));
// -----------------------------------------------------------------------


function renderCards(cards) {
  cards.forEach(card => {
    const cardItem = createCard(card.name, card.link);
    
    cardsList.append(cardItem);
  });
}

function submitNewProfile(evt) {
  evt.preventDefault();
  
  nameElement.textContent = nameInput.value;
  jobElememnt.textContent = jobInput.value;
  
  closeModal();
  toggleButtonState(formProfile);
}

function submitNewCard(evt) {
  const cardItem = createCard(cardTitleInput.value, cardUrl.value);
  
  evt.preventDefault();
  cardsList.prepend(cardItem);
  closeModal();
  formNewCard.reset();
  toggleButtonState(formNewCard);
}

function setEventListeners() {
  buttonEditProfile.addEventListener('click', () => openModal(modalEditProfile));
  buttonNewCard.addEventListener('click', () => openModal(modalNewCard));
  buttonCloseProfile.addEventListener('click', closeModal);
  buttonCloseNewCard.addEventListener('click', closeModal);
  buttonCloseImage.addEventListener('click', closeModal);
  
  formProfile.addEventListener('submit', submitNewProfile);
  formNewCard.addEventListener('submit', submitNewCard);
  
  document.addEventListener('click', closeByOverlayClick);
  document.addEventListener('keydown', closeByEscape);
}

renderCards(initialCards);
handleDeleteCard();
handleLikeCard();
handleOpenImage();
setEventListeners();