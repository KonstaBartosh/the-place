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
  popups,
  allModals,
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
  cards.forEach(card => cardsList.append(createCard(card)));
}

function handleEditProfile(evt) {
  evt.preventDefault();

  renderLoading(formProfile,true);

  updateUser(nameInput.value, aboutInput.value)
    .then(user => {
      nameElement.textContent = user.name;
      aboutElement.textContent = user.about;
    })
    .catch(err => console.error(err))
    .finally(() => {
      console.log('finally');
      renderLoading(formProfile, false);
      closeModal(modalEditProfile);
    });
}

function handleUpdateAvatar(evt) {
  evt.preventDefault();

  renderLoading(formEditAvatar, true);

  updateAvatar(avatarInput.value)
    .then(user => avatarElement.src = user.avatar)
    .catch(err => console.error(err))
    .finally(() => {
      renderLoading(formEditAvatar, false);
      closeModal(modalEditAvatar);
    })
}

function handleSubmitCard(evt) {
  evt.preventDefault();

  const name = cardTitleInput.value;
  const link = cardUrl.value;

  renderLoading(formNewCard,true);
  postCard(name, link)
    .then((сard) => {
        cardsList.prepend(createCard(сard));
      })
    .catch(err => console.error(err))
    .finally(() => {
      renderLoading(formNewCard, false);
      closeModal(modalNewCard);
      formNewCard.reset();
      toggleButtonState(formNewCard);
    });
  }

enableValidation();
handleOpenImage();

buttonEditProfile.addEventListener('click', () => {
  openModal(modalEditProfile)
});

buttonEditUserpic.addEventListener('click', () => {
  openModal(modalEditAvatar)
});

buttonNewCard.addEventListener('click', () => {
  openModal(modalNewCard);
  formNewCard.reset();
});


allModals.forEach(modal => {
  modal.addEventListener('click', (evt) => {
    if (evt.target.matches('.popup__close')) {
      closeModal(modal);
      clearValidation(modal);
    }
  });
});

formProfile.addEventListener('submit', handleEditProfile);
formEditAvatar.addEventListener('submit', handleUpdateAvatar);
formNewCard.addEventListener('submit', handleSubmitCard);
