const close = document.querySelector('#close');
const modal_container = document.querySelector('.modal-container');
close.addEventListener('click', function () {
  modal_container.style.opacity = '0';
  modal_container.style['pointer-events'] = 'none';
});
