var contenedor = document.getElementById("contenedor");
var array = [];


function mostrarPedidos() {
    if ($(".card-box")) {
       $(".card-box").remove()
    }
    

    for (i = 0; i < array.length; i++) {
        debugger
        var paquete = document.createElement("div");
        paquete.classList.add("card-box");
        paquete.setAttribute("id", "caja" + i);
        let caja = document.getElementById("caja" + i)

        let cliente = document.createElement("p");
        let tel = document.createElement("p");
        let dir = document.createElement("p");
        let ped = document.createElement("p");
        // comida.classList.add("card-title");
        cliente.innerHTML = array[i][0];
        tel.innerHTML = array[i][1];
        dir.innerHTML = array[i][2];
        ped.innerHTML = array[i][3];

        paquete.appendChild(cliente);
        paquete.appendChild(tel);
        paquete.appendChild(dir);
        paquete.appendChild(ped);

        contenedor.appendChild(paquete);
          
    }
    
}

function guardarPedidos() {

    var nombrev = nombre.value;
    var telefonov = telefono.value;
    var direccionv = direccion.value;
    var comidav = comida.value;
    var arrayInterno = [];
    arrayInterno.push(nombrev);
    arrayInterno.push(telefonov);
    arrayInterno.push(direccionv);
    arrayInterno.push(comidav);
    array.push(arrayInterno);
    vaciarinput();


}

function vaciarinput() {
    nombre.value = "";
    telefono.value = "";
    direccion.value = "";
    comida.value = "";
}
