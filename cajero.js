let saldo = 1000;

const consultar_saldo = document.querySelector('.consultar_saldo');
const abonar_saldo = document.querySelector('.abonar_saldo');
const retirar = document.querySelector('.retirar');
let mensaje = document.createElement('div');
mensaje.classList.add('mensaje');
mensaje.classList.add('btn-menu');
const item = `<form class="formulario_abono" onsubmit="sumarDinero()">
<input type="number" id="cantidad" placeholder="cantidad" />
<input type="submit" value="Submit" id="boton_submit" />
</form>
`;

const item2 = `<form class="formulario_abono" onsubmit="restarDinero()">
<input type="number" id="cantidad2" placeholder="cantidad" />
<input type="submit" value="Submit" id="boton_submit" />
</form>
`;
retirar.addEventListener('click', function (e) {
  limpiarMensaje();
  retirarDinero();
});

consultar_saldo.addEventListener('click', function (e) {
  limpiarMensaje();
  document.querySelector('.main_wrapper').appendChild(mensaje);
  console.log('click');
  mensaje.textContent = `Tu saldo es de ${saldo}`;
});

abonar_saldo.addEventListener('click', function (e) {
  limpiarMensaje();
  abonarDinero();
});

function abonarDinero() {
  mensaje.insertAdjacentHTML('afterbegin', item);
  document.querySelector('.main_wrapper').appendChild(mensaje);
}

function sumarDinero() {
  let valor = parseInt(document.getElementById('cantidad').value);

  console.log(valor);
  saldo = saldo + valor;
  console.log('el valor despues de sumarlo es ', saldo);
  mensaje.innerText = `el valor despues del deposito  es ${saldo}`;
}

function limpiarMensaje() {
  mensaje.innerHTML = '';
}

function retirarDinero() {
  mensaje.insertAdjacentHTML('afterbegin', item2);
  document.querySelector('.main_wrapper').appendChild(mensaje);
}

function restarDinero() {
  let valor = parseInt(document.getElementById('cantidad2').value);

  console.log(valor);
  saldo = saldo - valor;
  console.log('el valor despues del retiro es', saldo);
  mensaje.innerText = `el valor despues del retiro  es ${saldo}`;
}
