var aa;

function sumar(a,b,c){
	// bloque
	var aa = 8;
	return a+b+c;
}

function sumarArr(arr){
	// bloque
	var suma = 0;
	for(let v of arr)
		suma+=v;
	return suma;
}

// declararla: secundario: f(x)=x+1  => f(2)=3 
function f(x){
	return x+1;
}

// ejecutarla
f(f(f(9)))

a=[[[5]]]

a[0][0][0] == 5
[[5]][0][0]
[5][0]
5

// sumar dos
function ff(x){
	return f(f(x));
}

f(2)==3
ff(2)==4
ff(8)==10
ff(9)==11
ff(15)==17
ff(20)==22

function sumarDos(x){ // == ff
	return x+2;
}

*f(f(f(5)))
f(f(6))
f(7)
8

function incEnUno(x){
	return x+1;
}

// SER PROLIJO CON LOS NOMBRES PORQUE NOS AYUDA

*incEnUno(incEnUno(incEnUno(5)))

function crearUnArrApartirParam(x0,x1,x2,x3,x4){
	return [x0,x1,x2,x3,x4];
}


crearUnArrApartirParam(9,4)

num = 5; // numero, bool, string 
arr = [3,4,5]; //idem objeto

// declarar una funcion (no se ejecuto)
function modificoParamObj(a,n){
	n++;
	a[0]++;
}

w = 9
w = incEnUno(w)

// esto es ejecutar la funcion
modificoParamObj(arr,num)

modificoParamObj([5],5)








