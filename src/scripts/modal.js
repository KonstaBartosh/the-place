export function openModal(modal) {
  modal.classList.add('popup_is-opened');
}

export function closeModal() {
  const openPopup = document.querySelector('.popup_is-opened');
  openPopup.classList.remove('popup_is-opened');
}

export function closeByEscape(evt) {
  const openPopup = document.querySelector('.popup_is-opened');

  if (openPopup && evt.key === 'Escape') {
    closeModal();
  }
}

export function closeByOverlayClick(evt) {
  const openPopup = document.querySelector('.popup_is-opened');

  if (evt.target === openPopup) {
    closeModal();
  }
}