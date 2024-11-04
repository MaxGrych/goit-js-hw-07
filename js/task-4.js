
'use strict';
const form = document.querySelector('.login-form');

form.addEventListener('submit', subForm);

function subForm(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value.trim() === '' || password.value.trim() === '') {
    alert('All form fields must be filled in');
  } else {
    const dataForm = {
      email: email.value.trim(),
      password: password.value.trim(),
    };
    console.log(dataForm);
    event.currentTarget.reset();
  }
}