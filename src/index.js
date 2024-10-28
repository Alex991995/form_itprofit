import { keyFormData } from './scripts/constants.js';
import { validateForm } from './scripts/validate.js';
import './styles/main.scss';

const form = document.querySelector('.form');
const form__inputs = document.querySelectorAll('.form__input');

form.addEventListener('submit', async function (event) {
  event.preventDefault();

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
    const res = await response.json()
    f(res)
    // await f(res)
    // .then(response => response.json())
    // .then(res => console.log(res))
  }
});

function clearInput() {
  for (const input of form__inputs) {
    input.value = '';
  }
}

async function  f(res) {
  console.log(res)
  console.log(res.status)
  if(res.status == 'success'){
    // res.msg
    console.log('msg',res.message)
  }
 else if(res.status == 'error') {
    console.log('fields',res.message)
    // console.log(res.fields.inputName)
    // res.fields.inputName
  }
}
