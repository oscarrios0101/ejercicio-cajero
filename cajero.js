let saldo = 1000;

const consultar_saldo = document.querySelector('.consultar_saldo');
const abonar_saldo = document.querySelector('.abonar_saldo');
let mensaje = document.createElement('div');
mensaje.classList.add('mensaje');
mensaje.classList.add('btn-menu');
const item = `<form onsubmit="abonarSaldo()">
<input type="number" id="cantidad" placeholder="cantidad" />
<input type="submit" value="Submit" />
</form>
`;

consultar_saldo.addEventListener('click', function (e) {
  document.querySelector('.main_wrapper').appendChild(mensaje);
  console.log('click');
  mensaje.textContent = `Tu saldo es de ${saldo}`;
});

abonar_saldo.addEventListener('click', function (e) {
  abonarDinero();
  //   mensaje.insertAdjacentHTML('afterbegin', '<div id="two">two</div>');
  //   document.querySelector('.main_wrapper').appendChild(mensaje);
});

function abonarDinero() {
  mensaje.insertAdjacentHTML('afterbegin', item);
  document.querySelector('.main_wrapper').appendChild(mensaje);
}

function abonarSaldo() {
  let valor = parseInt(document.getElementById('cantidad').value);

  console.log(valor);
  saldo = saldo + valor;
  console.log('el valor despues de sumarlo es ', saldo);
}
