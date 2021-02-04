var contenedor = document.getElementById("contenedor");
var array = [
    ["jose", " 3 empanadas", " 1 mila"],
    [" pedro", " 1 pizza"],
    [" luis", " 4 hamburguesas", " 2 empanadas"],
    [" juan", " 5 panchos"],
    [" jorge", " 1 lomito", " 1 amburguesa", " 2 pizzas"]
];

function mostrarPedidos() {
    for (i = 0; i < array.length; i++) {
        var paquete = document.createElement("div");
        paquete.classList.add("paquete");
        for (j = 0; j < array[i].length; j++) {
        debugger	
            if (j == 0) {
                var cliente = document.createElement("p");
                cliente.classList.add("cliente");
                cliente.innerHTML = array[i][j];
                console.log(array[i][j])
                paquete.appendChild(cliente);
            } else {
                var comida = document.createElement("p");
                comida.classList.add("comida");
                comida.innerHTML = array[i][j];
                paquete.appendChild(comida);

            }

        }
        contenedor.appendChild(paquete);

    }

}
//mostrarPedidos();

