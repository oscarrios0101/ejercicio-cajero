saldo = 1000;
const mensaje = document.createElement('div');
//consultar saldo
const consultar_saldo = document.querySelector('.checar_saldo');
//abonar saldo
const cantidad_para_abonar = document.querySelector('#abonar').value;
const abonar = document.querySelector('.abonar-form');

//empieza la funcionalidad para abonar saldo
abonar.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(typeof cantidad_para_abonar);
  saldo = saldo + parseInt(cantidad_para_abonar);
  console.log('tu nuevo saldo es ', saldo);
  mensaje.textContent = `tu nuevo saldo es de ${saldo}`;
  mensaje.classList.add('mensaje');
  mensaje.classList.add('btn-menu');
  document.querySelector('.main_wrapper').appendChild(mensaje);
  cantidad_para_abonar = 0;
});

//empieza la funcionalidad para consultar saldo
consultar_saldo.addEventListener('click', consultar);

function consultar() {
  mensaje.textContent = `tu saldo es de ${saldo} pesos`;
  mensaje.classList.add('mensaje');
  mensaje.classList.add('btn-menu');
  document.querySelector('.main_wrapper').appendChild(mensaje);
}

// const mensaje = document.createElement('div');
// mensaje.textContent = 'primer elemento';
// mensaje.classList.add('mensaje');
// mensaje.classList.add('btn-menu');
// document.querySelector('.main_wrapper').appendChild(mensaje);
