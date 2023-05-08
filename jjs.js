function reservas() {
    let dia = document.getElementById("dia");
    let coste = document.getElementById("coste");
    let precio = [0, 35, 40, 45, 50]
    let fecha = new Date(dia.value);


    let diaSemana = fecha.getDay(1, 5);
    let precioFinal = 0;
    let descuento = 0;
    descuento = precioFinal * 0.1;


    if (diaSemana == 1) {
        precioFinal = precio[1];
        console.log(precioFinal);

    }
    if (diaSemana == 2) {
        precioFinal = precio[2];
        console.log(precioFinal);
    }

    if (diaSemana == 3) {
        precioFinal = precio[3];
        console.log(precioFinal);
    }
    if (diaSemana == 4) {
        precioFinal = precio[4];
        console.log(precioFinal);
    }
    if (diaSemana == 1) {
        precioFinal = precio[5];

        console.log(precioFinal);
    }
    if (diaSemana == 6 || diaSemana == 0) {
        precioFinal = false;

    }


    if (precioFinal == false || precioFinal == 0) {

        alert("No se puede reservar para el dia seleccionado");
        coste.value = precioFinal;
    } else {
        coste.value = precioFinal;
    }





    var selArt1 = document.getElementById('selArt1');
    var opcion = selArt1.options[selArt1.selectedIndex].value;
    document.getElementsByTagName('option');
    console.log(opcion);
    console.log(precioFinal);

    if (opcion == 0) {
        precioFinal = precio[0];
        coste.value = precioFinal + ' ' + "€";
        descuento = precioFinal * 0.1;
        console.log(precioFinal);
    }

    if (opcion == 1) {
        precioFinal = precio[1];
        coste.value = precioFinal + ' ' + "€";
        descuento = precioFinal * 0.1;
        console.log(precioFinal);
    }
    if (opcion == 2) {
        precioFinal = precio[2];
        coste.value = precioFinal + ' ' + "€";
        console.log(precioFinal);
    }
    if (opcion == 3) {
        precioFinal = precio[3];
        coste.value = precioFinal + ' ' + "€";
        console.log(precioFinal);
    }







}

function reservas2() {
    let dia = document.getElementById("dia").value;
    let coste = document.getElementById("coste");
    let precio = [0, 35, 40, 45, 50]
    let fecha = new Date(dia.value);

    let diaSemana = fecha.getDay(1, 5);
    let precioFinal = 0;
    let descuento = 0;
    descuento = precioFinal * 0.1;


    if (diaSemana == 1) {
        precioFinal = precio[1];
        console.log(precioFinal);

    }
    if (diaSemana == 2) {
        precioFinal = precio[2] ;
        console.log(precioFinal);
    }

    if (diaSemana == 3) {
        precioFinal = precio[3];
        console.log(precioFinal);
    }
    if (diaSemana == 4) {
        precioFinal = precio[4];
        console.log(precioFinal);
    }
    if (diaSemana == 1) {
        precioFinal = precio[5];

        console.log(precioFinal);
    }
    if (diaSemana == 6 || diaSemana == 0) {
        precioFinal = false;

    }


    if (precioFinal == false || precioFinal == 0) {

        alert("No se puede reservar para el dia seleccionado");
        coste.value = precioFinal;
    } else {
        coste.value = precioFinal;
    }





    var selArt1 = document.getElementById('selArt1');
    var opcion = selArt1.options[selArt1.selectedIndex].value;
    document.getElementsByTagName('option');
    console.log(opcion);
    console.log(precioFinal);

    if (opcion == 0) {
        precioFinal = precio[0];
        coste.value = precioFinal + ' ' + "€";
        descuento = precioFinal * 0.1;
        console.log(precioFinal);
    }

    if (opcion == 1) {
        precioFinal = precio[1];
        coste.value = precioFinal + ' ' + "€";
        descuento = precioFinal * 0.1;
        console.log(precioFinal);
    }
    if (opcion == 2) {
        precioFinal = precio[2];
        coste.value = precioFinal + ' ' + "€";
        console.log(precioFinal);
    }
    if (opcion == 3) {
        precioFinal = precio[3];
        coste.value = precioFinal + ' ' + "€";
        console.log(precioFinal);
    }



}

function reservas3() {
    let dia = document.getElementById("dia").value;
    let coste = document.getElementById("coste");
    let precio = [0, 35, 40, 45, 50]
    let fecha = new Date(dia.value);

    let diaSemana = fecha.getDay(1, 5);
    let precioFinal = 0;
    let descuento = 0;
    descuento = precioFinal * 0.1;


    if (diaSemana == 1) {
        precioFinal = precio[1];
        console.log(precioFinal);

    }
    if (diaSemana == 2) {
        precioFinal = precio[2];
        console.log(precioFinal);
    }

    if (diaSemana == 3) {
        precioFinal = precio[3];
        console.log(precioFinal);
    }
    if (diaSemana == 4) {
        precioFinal = precio[4];
        console.log(precioFinal);
    }
    if (diaSemana == 1) {
        precioFinal = precio[5];

        console.log(precioFinal);
    }
    if (diaSemana == 6 || diaSemana == 0) {
        precioFinal = false;

    }


    if (precioFinal == false || precioFinal == 0) {

        alert("No se puede reservar para el dia seleccionado");
        coste.value = precioFinal;
    } else {
        coste.value = precioFinal;
    }





    var selArt1 = document.getElementById('selArt1');
    var opcion = selArt1.options[selArt1.selectedIndex].value;
    document.getElementsByTagName('option');
    console.log(opcion);
    console.log(precioFinal);

    if (opcion == 0) {
        precioFinal = precio[0];
        coste.value = precioFinal + ' ' + "€";
        descuento = precioFinal * 0.1;
        console.log(precioFinal);
    }

    if (opcion == 1) {
        precioFinal = precio[1];
        coste.value = precioFinal + ' ' + "€";
        descuento = precioFinal * 0.1;
        console.log(precioFinal);
    }
    if (opcion == 2) {
        precioFinal = precio[2];
        coste.value = precioFinal + ' ' + "€";
        console.log(precioFinal);
    }
    if (opcion == 3) {
        precioFinal = precio[3];
        coste.value = precioFinal + ' ' + "€";
        console.log(precioFinal);
    }





}

function reservas4() {
    let dia = document.getElementById("dia").value;
    let coste = document.getElementById("coste");
    let precio = [0, 35, 40, 45, 50]
    let fecha = new Date(dia.value);
    let diaSemana = fecha.getDay(1, 5);
    let precioFinal = 0;
    let descuento = 0;
    descuento = precioFinal * 0.1;


    if (diaSemana == 1) {
        precioFinal = precio[1];
        console.log(precioFinal);

    }
    if (diaSemana == 2) {
        precioFinal = precio[2];
        console.log(precioFinal);
    }

    if (diaSemana == 3) {
        precioFinal = precio[3];
        console.log(precioFinal);
    }
    if (diaSemana == 4) {
        precioFinal = precio[4];
        console.log(precioFinal);
    }
    if (diaSemana == 1) {
        precioFinal = precio[5];

        console.log(precioFinal);
    }
    if (diaSemana == 6 || diaSemana == 0) {
        precioFinal = false;

    }


    if (precioFinal == false || precioFinal == 0) {

        alert("No se puede reservar para el dia seleccionado");
        coste.value = precioFinal;
    } else {
        coste.value = precioFinal;
    }





    var selArt1 = document.getElementById('selArt1');
    var opcion = selArt1.options[selArt1.selectedIndex].value;
    document.getElementsByTagName('option');
    console.log(opcion);
    console.log(precioFinal);

    if (opcion == 0) {
        precioFinal = precio[0];
        coste.value = precioFinal + ' ' + "€";
        descuento = precioFinal * 0.1;
        console.log(precioFinal);
    }

    if (opcion == 1) {
        precioFinal = precio[1];
        coste.value = precioFinal + ' ' + "€";
        descuento = precioFinal * 0.1;
        console.log(precioFinal);
    }
    if (opcion == 2) {
        precioFinal = precio[2];
        coste.value = precioFinal + ' ' + "€";
        console.log(precioFinal);
    }
    if (opcion == 3) {
        precioFinal = precio[3];
        coste.value = precioFinal + ' ' + "€";
        console.log(precioFinal);
    }



}


function reservas5() {
    let dia = document.getElementById("dia").value;
    let coste = document.getElementById("coste");
    let precio = [0, 35, 40, 45, 50]
    let fecha = new Date(dia.value);
    let diaSemana = fecha.getDay(1, 5);
    let precioFinal = 0;
    let descuento = 0;
    descuento = precioFinal * 0.1;


    if (diaSemana == 1) {
        precioFinal = precio[1];
        console.log(precioFinal);

    }
    if (diaSemana == 2) {
        precioFinal = precio[2];
        console.log(precioFinal);
    }

    if (diaSemana == 3) {
        precioFinal = precio[3];
        console.log(precioFinal);
    }
    if (diaSemana == 4) {
        precioFinal = precio[4];
        console.log(precioFinal);
    }
    if (diaSemana == 1) {
        precioFinal = precio[5];

        console.log(precioFinal);
    }
    if (diaSemana == 6 || diaSemana == 0) {
        precioFinal = false;

    }


    if (precioFinal == false || precioFinal == 0) {

        alert("No se puede reservar para el dia seleccionado");
        coste.value = precioFinal;
    } else {
        coste.value = precioFinal;
    }





    var selArt1 = document.getElementById('selArt1');
    var opcion = selArt1.options[selArt1.selectedIndex].value;
    document.getElementsByTagName('option');
    console.log(opcion);
    console.log(precioFinal);

    if (opcion == 0) {
        precioFinal = precio[0];
        coste.value = precioFinal + ' ' + "€";
        descuento = precioFinal * 0.1;
        console.log(precioFinal);
    }

    if (opcion == 1) {
        precioFinal = precio[1];
        coste.value = precioFinal + ' ' + "€";
        descuento = precioFinal * 0.1;
        console.log(precioFinal);
    }
    if (opcion == 2) {
        precioFinal = precio[2];
        coste.value = precioFinal + ' ' + "€";
        console.log(precioFinal);
    }
    if (opcion == 3) {
        precioFinal = precio[3];
        coste.value = precioFinal + ' ' + "€";
        console.log(precioFinal);
    }



}


function cursos() {
    let desayuno = document.getElementById("desayuno").value='Pronto';
    let almuerzo = document.getElementById("almuerzo").value='Mañana';
    let comida = document.getElementById("comida").value='Medio dia';
    let merienda = document.getElementById("merienda").value='Tarde';
    let cena = document.getElementById("cena").value='Noche';
    let curso = document.getElementById("curso");
    let cacao=[ 'desayuno','almuerzo','comida','merienda','cena']
    let comprar = document.getElementById("comprar");
    
   
    
}