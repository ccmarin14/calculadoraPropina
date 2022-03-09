//Inputs
let $factura = document.getElementById('factura__valor');
let $empleados = document.getElementById('empleados__cantidad');
let $porcentaje = document.querySelector('.porcentaje__valor');

//Outputs
const $tip = document.getElementById('tip');
const $total = document.getElementById('total');

//Selectors
const $porcentajes = document.querySelectorAll('.valor');
const $factura__valor = document.getElementById('factura__valor');
const $empleados__cantidad = document.getElementById('empleados__cantidad');
const $boton = document.querySelector('.boton');
const $valorCustom = document.getElementById('cantidad');

//Events
$boton.addEventListener('click',cleanView);

