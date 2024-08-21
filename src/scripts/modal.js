import {
  SAVE_BUTTON_LOADING_TEXT,
  SAVE_BUTTON_DEFAULT_TEXT,
  MODAL_OPENED_CLASS,
} from "./constants";

function openModal(modal) {
  modal.classList.add(MODAL_OPENED_CLASS);
  document.addEventListener("click", closeModalByEvent);
  document.addEventListener("keydown", closeModalByEvent);
}

function closeModal(modal) {
  modal.classList.remove(MODAL_OPENED_CLASS);
  document.removeEventListener("click", closeModalByEvent);
  document.removeEventListener("keydown", closeModalByEvent);
}

function closeModalByEvent(e) {
  const popupIsOpen = document.querySelector(`.${MODAL_OPENED_CLASS}`);

  if (e.key === "Escape" || e.target === popupIsOpen) {
    closeModal(popupIsOpen);
  }
}

function renderLoading(modal, isLoading) {
  const button = modal.querySelector(".popup__button");

  button.textContent = isLoading ? SAVE_BUTTON_LOADING_TEXT : SAVE_BUTTON_DEFAULT_TEXT;
}

export { openModal, closeModal, renderLoading };
