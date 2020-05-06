const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const showError = () => {
  document
    .querySelector('.cta__form__input')
    .classList.add('cta__form__input--error');
  document
    .querySelector('.cta__form__error-message')
    .classList.add('show-error');
};

const validateEmail = (event) => {
  const email = document.getElementById('email').value;
  if (email && email.match(EMAIL_PATTERN)) return;

  event.preventDefault();
  showError();
};

const form = document.getElementById('form');
form.addEventListener('submit', validateEmail);
