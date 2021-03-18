const close = document.querySelector('#close');
const modal_container = document.querySelector('.modal-container');
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const modal_message = document.querySelector('.modal_message');

close.addEventListener('click', function () {
  modal_container.style.opacity = '0';
  modal_container.style['pointer-events'] = 'none';
});

form.addEventListener('submit', (e) => {
  e.preventDefault(e);
  console.log('click');
  fetch('data.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (obj) {
      evalPassword(obj);
    });
});

function evalPassword(obj) {
  obj.accounts.forEach((element) => {
    if (
      element.password == password.value &&
      element.username == username.value
    ) {
      console.log(`el usuario ${element.username} tiene acceso`);
      modal_container.style.opacity = '1';
      modal_container.style['pointer-events'] = 'auto';
      modal_message.innerHTML = 'Ahora tienes Acceso a mi onlyfans';
    } else {
      modal_container.style.opacity = '1';
      modal_container.style['pointer-events'] = 'auto';
      modal_message.innerHTML = 'Por Favor Ingresa Una Contraseña valida';
    }
  });
}
