import { keyFormData } from './scripts/constants.js';
import { handleResponse } from './scripts/helperFunctions.js';
import { validateForm } from './scripts/validate.js';
import './styles/main.scss';

const form = document.querySelector('.form');
const showDialog = document.querySelector('.showDialog');
const favDialog = document.querySelector('.favDialog');

form.addEventListener('submit', async function (event) {
  event.preventDefault();
  ``;
  const formData = new FormData(form);
  const name = formData.get(keyFormData.name);
  const message = formData.get(keyFormData.message);
  const email = formData.get(keyFormData.email);
  const phone = formData.get(keyFormData.phone);

  const body = {
    name,
    message,
    email,
    phone,
  };

  const isValid = validateForm(this);
  if (isValid) {
    const response = await fetch('http://localhost:9090/api/registration', {
      method: 'post',
      body,
      headers: {
        'content-type': 'application/json',
      },
    });
    const res = await response.json();
    handleResponse(res);
  }
});

showDialog.addEventListener('click', function (event) {
  favDialog.showModal();
});

favDialog.addEventListener('click', function (event) {
  if (
    event.target.classList.contains('favDialog') ||
    event.target.classList.contains('closeDialog')
  ) {
    favDialog.close();
  }
});
