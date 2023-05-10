function reservas() {
    let dia = document.getElementById("dia");
    let coste = document.getElementById("coste");
    let precio = [0, 35, 40, 45, 50]
    let fecha = new Date(dia.value);


    let diaSemana = fecha.getDay(1, 5);
    let precioFinal = 0;


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
    if (diaSemana == 5) {
        precioFinal = precio[1];

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
    let diam = document.getElementById("diam").value;
    let costem = document.getElementById("costem");
    let preciom = [0, 35, 40, 45, 50]
    let fecham = new Date(diam.value);

    let diaSemanam = fecham.getDay(1, 5);
    let precioFinalm = 0;


    if (diaSemanam == 1) {
        precioFinalm = preciom[1];
        console.log(precioFinalm);

    }
    if (diaSemanam == 2) {
        precioFinalm = preciom[2] ;
        console.log(precioFinalm);
    }

    if (diaSemanam == 3) {
        precioFinalm = preciom[3];
        console.log(precioFinalm);
    }
    if (diaSemanam == 4) {
        precioFinalm = preciom[4];
        console.log(precioFinalm);
    }
    if (diaSemanam == 5) {
        precioFinalm = preciom[1];

        console.log(precioFinalm);
    }
    if (diaSemanam == 6 || diaSemanam == 0) {
        precioFinalm = false;

    }


    if (precioFinalm == false || precioFinalm == 0) {

        alert("No se puede reservar para el dia seleccionado");
        costem.value = precioFinalm;
    } else {
        costem.value = precioFinalm;
    }





    var selArt2 = document.getElementById('selArt2');
    var opcionm = selArt2.options[selArt2.selectedIndex].value;
    document.getElementsByTagName('option');

    if (opcionm == 0) {
        precioFinalm = preciom[0];
        costem.value = precioFinalm + ' ' + "€";
        console.log(precioFinalm);
    }
    if (opcionm == 1) {
        precioFinalm = preciom[1];
        costem.value = precioFinalm + ' ' + "€";
        console.log(precioFinalm);
    }
    if (opcionm == 2) {
        precioFinalm = preciom[2];
        costem.value = precioFinalm + ' ' + "€";
        console.log(precioFinalm);
    }
    if (opcionm == 3) {
        precioFinalm = preciom[3];
        costem.value = precioFinalm + ' ' + "€";
        console.log(precioFinalm);
    }



}

function reservas3() {
    let diamd = document.getElementById("diamd").value;
    let costedm = document.getElementById("costemd");
    let preciomd = [0, 35, 40, 45, 50]
    let fechamd = new Date(dia.value);

    let diaSemanamd = fechamd.getDay(1, 5);
    let precioFinalmd = 0;

    

    if (diaSemanamd == 1) {
        precioFinalmd = preciomd[1];
        console.log(precioFinalmd);
        costedm.value = precioFinal
    }
    if (diaSemanamd == 2) {
        precioFinalmd = preciomd[2];
        console.log(precioFinalmd);
        costedm.value = precioFinal
    }
    if (diaSemanamd == 3) {
        precioFinalmd = preciomd[3];
        console.log(precioFinalmd);
        costedm.value = precioFinal
    }
    if (diaSemanamd == 4) {
        precioFinalmd = preciomd[4];
        console.log(precioFinalmd);
        costedm.value = precioFinal
    }
    if (diaSemanamd == 5) {
        precioFinalmd = preciomd[1];
        console.log(precioFinalmd);
        costedm.value = precioFinal
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