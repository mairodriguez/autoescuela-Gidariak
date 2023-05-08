
let dia = document.getElementById('fecha')

let coste = document.getElementById('coste')




function reservas() {
    let precio = [0, 35, 40, 37];
    let fecha = new Date(dia.value)
    let tiempo = Math.floor(fecha.getTime())
    coste.value = tiempo / (24 * 60 * 60 * 1000);
    console.log(tiempo)
    var selArt1 = document.getElementById('selArt1');
    var opcion = selArt1.options[selArt1.selectedIndex].value;
    document.getElementsByTagName('option');
    console.log(opcion);
    if (opcion == 1) {
        coste.value = precio[1];
    }

}


let hora = document.getElementById('hora')
let nombre = document.getElementById('nombre')
let apellidos = document.getElementById('apellidos')
let dni = document.getElementById('dni')
let telefono = document.getElementById('telefono')
let email = document.getElementById('email')
let matricula = document.getElementById('matricula')