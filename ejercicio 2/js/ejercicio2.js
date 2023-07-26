/* Dado el sueldo de un empleado, imprimir en una alerta el nuevo sueldo del empleado si tuvo un sueldo del 10%*/

/*const sueldo = prompt("ingresa el valor del sueldo")
const psuedlo = 10/100;
const nsueldo = sueldo + parseInt(sueldo*psuedlo);
alert("el nuevo sueldo con el numero es: "+nsueldo);*/

/* Ejercicio 3 - un vendedor que tiene su sueldo base, recibe una comision de 30% del total de las ventas de un mes, 
el quiere saber cuanto ganara en un mes que tuvo tres ventas*/

let sueldo = prompt("ingresa el valor del sueldo");
let venta1 = prompt("ingresa el valor de vente")
let venta2 = prompt("ingresa el valor de vente")
let venta3 = prompt("ingresa el valor de vente")
let porcentaje = 30/100;
let comision = parseInt(venta1)+ parseInt(venta2)+ parseInt(venta3)
let res = parseInt(sueldo) + parseInt(comision*porcentaje);
let resulf = parseInt(resultado);

alert("su sueldo junto a la comision de tres ventes fue de $" *resulf* " COP")