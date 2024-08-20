function showInputError(input) {
  input.classList.add('popup__input_error-active');
  input.nextElementSibling.classList.add('display');
  input.nextElementSibling.textContent = input.validationMessage;
}

function hideInputError(input) {
  input.classList.remove('popup__input_error-active');
  input.nextElementSibling.classList.remove('display');
  input.nextElementSibling.textContent = '';
}

function clearValidation(form) {
  const inputs = Array.from(form.querySelectorAll('.popup__input'));

  inputs.forEach((input) => hideInputError(input));
}

function toggleButtonState(form) {
  const button = form.querySelector('.button');

  if (!form.checkValidity()) {
    button.setAttribute('disabled', true);
  } else {
    button.removeAttribute('disabled');
  }
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

function enableValidation() {
  const forms = Array.from(document.forms);

  forms.forEach(form => {
    toggleButtonState(form);
    form.addEventListener('input', () => validateForm(form));
  });
}

export { toggleButtonState, clearValidation, enableValidation };
