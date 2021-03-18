const close = document.querySelector('#close');
const modal_container = document.querySelector('.modal-container');
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

close.addEventListener('click', function () {
  modal_container.style.opacity = '0';
  modal_container.style['pointer-events'] = 'none';
});

function evalPassword(obj) {
  console.log(obj.password);
  console.log('el password por el usuario es', password.value);
  if (obj.password == password.value) {
    console.log('oscar inicio secion');
  }
}

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
