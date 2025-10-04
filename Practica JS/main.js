//operaciones
const operacion = prompt('ingresa la operacion que deseas realizar: +,-,*,/,%');

const valor1 = parseInt(prompt('ingresa un valor'));

const valor2 = parseInt(prompt('ingresa un valor'));
//que el usuario elija la operacion

const suma = valor1 + valor2;
const resta = valor1 - valor2;
const multiplicacion = valor1 * valor2;
const divicion = valor1 / valor2;
const modulo = valor1 % valor2;
if (operacion === '+') {
    alert('el resultado de la suma es '+ suma);
} else if (operacion === '-') {
  alert('El resultado de de la resta es '+ resta);
} else if (operacion === '*') {
  alert('El resultado de la multiplicacion es '+ multiplicacion);
} else if (operacion === '/') {
  alert('El resultado de la divicion es '+ divicion);
} else if (operacion === '%') {
  alert('El resultado del modulo es '+ modulo);
} else {
    alert('operacion no valida');
}
