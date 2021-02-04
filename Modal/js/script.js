var cliente = document.getElementById('idIniciar');

// function persona(nombre/*, apellido+*/, contraseña) {
//     this.nombre = nombre;
//     //this.apellido = apellido;
//     this.contraseña = contraseña;
// }
// cliente.onclick = function capturar() {

//     var nombreCapturar = document.getElementById('idNombre').value;
//     //var apellidoCapturar = document.getElementById('idApellido').value;
//     var contraseñaCapturar = document.getElementById('idContraseña').value;
//     iniciarCliente = new persona(nombreCapturar/*, apellidoCapturar*/, contraseñaCapturar);
//     agregar();
//     verificar();
// }
// var datos = [];

// function agregar() {
//     datos.push(iniciarCliente);
//     console.log(datos);
// }

var usuarios = [
	{
	usuario:'fabrizio',
	pass:'111'
	},
	{
	usuario:'jose',
	pass:'222'
	},
	{
	usuario:'jorge',
	pass:'333'
	}
];

cliente.onclick = function verificar(){
	debugger;
	var noUsuario = true;
	var user = document.getElementById('idNombre').value;
	var contr = document.getElementById('idContraseña').value;
	for (var i=0; i<usuarios.length; i++){
		if(usuarios[i].usuario!=user){

		}
		if(usuarios[i].usuario===user){
			noUsuario = false;
			//existe el usuario
			if(usuarios[i].pass===contr){
				alert('ingresaste');
		
				
			}else{
				alert('contraseña incorrecta')
			};
		}
	}
	if (noUsuario === true){
		alert('usuario incorrecto');
	}
}


