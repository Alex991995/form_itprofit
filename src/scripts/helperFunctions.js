import { mask } from './validate.js';

const form__inputs = document.querySelectorAll('.form__input');

export function clearInput() {
  for (const input of form__inputs) {
    input.value = '';
  }
}

export function handleResponse(res) {
  if (res.status == 'success') {
    alert(res.message);

    clearInput();
    mask.masked.reset();
  } else if (res.status == 'error') {
    alert(res.message);

  }
}
