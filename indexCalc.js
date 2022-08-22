const displayLastValue = document.getElementById('lastValue');
const displayValue = document.getElementById('value');
const botonesNumero = document.querySelectorAll('.number');
const botonesOperadores = document.querySelectorAll('.operator');


const display = new Display(displayLastValue,displayValue);



botonesNumero.forEach(boton => {
    boton.addEventListener('click', () => display.addNumber(boton.innerHTML));
});
botonesOperadores.forEach(boton =>{
    boton.addEventListener('click', () => display.idOperation(boton.value));
})