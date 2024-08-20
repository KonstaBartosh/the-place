function openModal(modal) {
  modal.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeByEscape);
  document.addEventListener('click', closeByOverlayClick);
}

function closeModal() {
  const openPopup = document.querySelector('.popup_is-opened');

  openPopup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeByEscape);
  document.removeEventListener('click', closeByOverlayClick);
}

function closeByEscape(evt) {
  const openPopup = document.querySelector('.popup_is-opened');

  if (openPopup && evt.key === 'Escape') {
    openPopup.classList.remove('popup_is-opened');
  }
}

function closeByOverlayClick(evt) {
  const openPopup = document.querySelector('.popup_is-opened');

  if (evt.target === openPopup) {
    openPopup.classList.remove('popup_is-opened');
  }
}

function renderLoading(modal,isLoading) {
  const button = modal.querySelector('.popup__button');

  if (isLoading) {
    button.textContent = 'Загрузка...';
  } else {
    button.textContent = 'Сохранить';
  }
}

export { openModal, closeModal, renderLoading };