import './index.css';
import { setUserContext } from './scripts/userState';
import { openModal, closeModal, renderLoading } from './scripts/modal';
import { createCard, handleOpenImage } from './scripts/card';
import { toggleButtonState, enableValidation, clearValidation } from './scripts/formValidation';
import { fetchCards, fetchUser, postCard, updateAvatar, updateUser } from './scripts/api';
import {
  modalNewCard,
  modalEditProfile,
  buttonNewCard,
  buttonEditProfile,
  formProfile,
  formNewCard,
  nameInput,
  aboutInput,
  cardTitleInput,
  cardUrl,
  nameElement,
  aboutElement,
  cardsList,
  buttonEditUserpic,
  formEditAvatar,
  avatarInput,
  modalEditAvatar,
  avatarElement,
} from "./scripts/constants";

async function loadData() {
  try {
    const [ userResponse, cardsResponse ] = await Promise.all([fetchUser(), fetchCards()]);

    if (userResponse.status !== 200 || cardsResponse.status !== 200) {
      throw new Error('Ошибка загрузки данных');
    } 

    const user = await userResponse.json();
    const cards = await cardsResponse.json();

    setUserContext(user); // устанавливаем контекст пользователя до рендера карточек

    setUserData(user);
    renderCards(cards);
    
  } catch (error) {
    console.error(error);
  }
}

loadData();

function setUserData(user) {
  nameElement.textContent = user.name;
  aboutElement.textContent = user.about;
  avatarElement.src = user.avatar;
  avatarElement.alt = user.name
  // заполняем инпуты данными пользователя с сервера
  nameInput.value = user.name;
  aboutInput.value = user.about;
  avatarInput.value = user.avatar;
}

function renderCards(cards) {
  cards.forEach(card => {
    const cardItem = createCard(card);
    cardsList.append(cardItem);
  });
}

function handleUpdateProfile(evt) {
  evt.preventDefault();

  renderLoading(formProfile,true);

  updateUser(nameInput.value, aboutInput.value)
    .then(res => res.json())
    .then(user => {
      nameElement.textContent = user.name;
      aboutElement.textContent = user.about;
    })
    .catch(err => console.error(err))
    .finally(() => {
      console.log('finally');
      renderLoading(formProfile, false);
      closeModal();
    });
}

function handleUpdateAvatar(evt) {
  evt.preventDefault();

  renderLoading(formEditAvatar, true);

  updateAvatar(avatarInput.value)
    .then(res => res.json())
    .then(user => avatarElement.src = user.avatar)
    .catch(err => console.error(err))
    .finally(() => {
      renderLoading(formEditAvatar, false);
      closeModal();
    })
}

function handleSubmitCard(evt) {
  evt.preventDefault();

  const name = cardTitleInput.value;
  const link = cardUrl.value;

  renderLoading(formNewCard,true);
  postCard(name, link)
    .then(res => res.json())
    .then((сard) => {
        const cardItem = createCard(сard);
        cardsList.prepend(cardItem);
      })
    .catch(err => console.error(err))
    .finally(() => {
      renderLoading(formNewCard, false);
      closeModal();
      formNewCard.reset();
      toggleButtonState(formNewCard);
    });
  }

enableValidation();
handleOpenImage();

buttonEditProfile.addEventListener('click', () => {
  openModal(modalEditProfile)
  clearValidation(formProfile);
});

buttonEditUserpic.addEventListener('click', () => {
  openModal(modalEditAvatar)
  clearValidation(formEditAvatar);
});

buttonNewCard.addEventListener('click', () => {
  openModal(modalNewCard);
  clearValidation(formNewCard);
  formNewCard.reset();
});

document.addEventListener('click', (evt) => {
  if (evt.target.matches('.popup__close')) {
    closeModal();
  }
});

formProfile.addEventListener('submit', handleUpdateProfile);
formEditAvatar.addEventListener('submit', handleUpdateAvatar);
formNewCard.addEventListener('submit', handleSubmitCard);
