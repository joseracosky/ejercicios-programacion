// obtenemos el buttom en variables

var pantalla = document.getElementById("pantalla");
var recet = document.getElementById("recet");
var sumar = document.getElementById("sumar");
var restar = document.getElementById("restar");
var mult = document.getElementById("mult");
var div = document.getElementById("div");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var num4 = document.getElementById("num4");
var num5 = document.getElementById("num5");
var num6 = document.getElementById("num6");
var num7 = document.getElementById("num7");
var num8 = document.getElementById("num8");
var num9 = document.getElementById("num9");
var num0 = document.getElementById("num0");
var igual = document.getElementById("igual");

// escribe en la pantalla el numero que se precione

num1.onclick = function() {
	pantalla.textContent += "1";
}
num2.onclick = function() {
	pantalla.textContent = pantalla.textContent + "2";
}
num3.onclick = function() {
	pantalla.textContent = pantalla.textContent + "3";
}
num4.onclick = function() {
	pantalla.textContent = pantalla.textContent + "4";
}
num5.onclick = function() {
	pantalla.textContent = pantalla.textContent + "5";
}
num6.onclick = function() {
	pantalla.textContent = pantalla.textContent + "6";
}
num7.onclick = function() {
	pantalla.textContent = pantalla.textContent + "7";
}
num8.onclick = function() {
	pantalla.textContent = pantalla.textContent + "8";
}
num9.onclick = function() {
	pantalla.textContent = pantalla.textContent + "9";
}
num0.onclick = function() {
	pantalla.textContent = pantalla.textContent + "0";

	// FUNCIONES PARA LAS OPERACIONES
}
var operandoa;
var operandob;
var operacion;
sumar.onclick = function() {
	operandoa = pantalla.textContent;
	operacion = "+";
	limpiar ();

}
restar.onclick = function() {
	operandoa = pantalla.textContent;
	operacion = "-";
	limpiar ();

}
div.onclick = function() {
	operandoa = pantalla.textContent;
	operacion = "/";
	limpiar ();

}
mult.onclick = function() {
	operandoa = pantalla.textContent;
	operacion = "*";
	limpiar ();

}
function limpiar() {
pantalla.textContent = "";
}

recet.onclick = function () {
	recetear ()
}
function recetear () {
	pantalla.textContent = "";
	operandoa = 0;
	operandob = 0;
	operacion= "";
}
igual.onclick = function(){
	operandob = pantalla.textContent;
	resolver();
}
 // agregamos el switch para las operaciones

 function resolver () {
 	var resp = 0;
 	switch (operacion) {
 		case "+":
 		resp = parseFloat(operandoa) + parseFloat(operandob);
 		break;
 		case "-":
 		resp = parseFloat(operandoa) - parseFloat(operandob);
 		break;
 		case "/":
 		resp = parseFloat(operandoa) / parseFloat(operandob);
 		break;
 		case "*":
 		resp = parseFloat(operandoa) * parseFloat(operandob);
 		break;

 	}
 	recetear();
 	pantalla.textContent = resp;

 }
