function reservas() {
    let dia = document.getElementById("dia");
    let coste = document.getElementById("coste");
    let precio = [0, 35, 40, 45, 50]
    let fecha = new Date(dia.value);
    let diaSemana = fecha.getDay(1, 5);
    let precioFinal = 0;

    //cambiar el color de fonde de fecha
    dia.style.backgroundColor = "red";

    //aumentar el tamaño
    dia.style.fontSize = "20px";


    if (diaSemana == 1) {
        precioFinal = precio[1];
        //console.log(precioFinal);
    }

    if (diaSemana == 2) {
        precioFinal = precio[2];
        //console.log(precioFinal);
    }

    if (diaSemana == 3) {
        precioFinal = precio[3];
        //console.log(precioFinal);
    }
    if (diaSemana == 4) {
        precioFinal = precio[4];
        //console.log(precioFinal);
    }

    if (diaSemana == 5) {
        precioFinal = precio[1];
        //console.log(precioFinal);
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

    //seleccion de hora

    var selArt1 = document.getElementById('selArt1');
    var opcion = selArt1.options[selArt1.selectedIndex].value;
    document.getElementsByTagName('option');
    //console.log(opcion);
    //console.log(precioFinal);

    if (opcion == 0) {
        precioFinal = precio[0];
        coste.value = precioFinal + ' ' + "€" + '/' + 'H';
        //console.log(precioFinal);
        //cambiar el color de fondo de coste
        coste.style.backgroundColor = "red";
    }

    if (opcion == 1) {
        precioFinal = precio[1];
        coste.value = precioFinal + ' ' + "€" + '/' + 'H';
        //console.log(precioFinal);31
    }
    if (opcion == 2) {
        precioFinal = precio[2];
        coste.value = precioFinal + ' ' + "€" + '/' + 'H';
        //console.log(precioFinal);
    }
    if (opcion == 3) {
        precioFinal = precio[3];
        coste.value = precioFinal + ' ' + "€" + '/' + 'H';
        //console.log(precioFinal);

    }

    // // guardar dia reservado 
    // let diaReservado = document.getElementById("diaReservado");
    // diaReservado.value = dia.value;

    // //si diaReservado es igual a diaSemana cambiar el color
    // if (diaReservado.value == diaSemana) {
    //     diaReservado.style.backgroundColor = "red";
    // }

    // // guardar hora reservada
    // let horaReservada = document.getElementById("horaReservada");
    // horaReservada.value = opcion;

    // // guardar precio final
    // let precioFinalReserva = document.getElementById("precioFinalReserva");
    // precioFinalReserva.value = precioFinal;

    // // guardar profesor
    // let profesor = document.getElementById("profesor");

    // // guardar los datos en el localstorage
    // let datosReserva = {
    //     dia: diaReservado.value,
    //     hora: horaReservada.value,
    //     precio: precioFinalReserva.value,
    //     id: idReserva,
    //     profesor: profesor.value
    // }
    // localStorage.setItem(idReserva, JSON.stringify(datosReserva));
    // idReserva++;
    // localStorage.setItem("idReserva", idReserva);
    // //console.log(datosReserva);
    // //console.log(idReserva);
    // //console.log(localStorage);
    // //console.log(localStorage.getItem("idReserva"));
    // //console.log(localStorage.getItem(idReserva - 1));
    // //console.log(JSON.parse(localStorage.getItem(idReserva - 1)));
}


function reservas2() {
    let diam = document.getElementById("diam");
    let costem = document.getElementById("costem");
    let preciom = [0, 35, 40, 45, 50]
    let fecham = new Date(diam.value);
    let diaSemanam = fecham.getDay(1, 5);
    let precioFinalm = 0;

    //cambiar el color de fonde de fecha
    dia.style.backgroundColor = "red";

    //aumentar el tamaño
    dia.style.fontSize = "20px";


    if (diaSemanam == 1) {
        precioFinalm = preciom[1];
        //console.log(precioFinalm);

    }
    if (diaSemanam == 2) {
        precioFinalm = preciom[2];
        //console.log(precioFinalm);
    }

    if (diaSemanam == 3) {
        precioFinalm = preciom[3];
        //console.log(precioFinalm);
    }
    if (diaSemanam == 4) {
        precioFinalm = preciom[4];
        //console.log(precioFinalm);
    }
    if (diaSemanam == 5) {
        precioFinalm = preciom[1];
        //console.log(precioFinalm);
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

    //seleccion de hora

    var selArt2 = document.getElementById('selArt2');
    var opcionm = selArt2.options[selArt2.selectedIndex].value;
    document.getElementsByTagName('option');

    if (opcionm == 0) {
        precioFinalm = preciom[0];
        costem.value = precioFinalm + ' ' + "€" + '/' + 'H';
        //console.log(precioFinalm);
    }
    if (opcionm == 1) {
        precioFinalm = preciom[1];
        costem.value = precioFinalm + ' ' + "€" + '/' + 'H';
        //console.log(precioFinalm);
    }
    if (opcionm == 2) {
        precioFinalm = preciom[2];
        costem.value = precioFinalm + ' ' + "€" + '/' + 'H';
        //console.log(precioFinalm);
    }
    if (opcionm == 3) {
        precioFinalm = preciom[3];
        costem.value = precioFinalm + ' ' + "€" + '/' + 'H';
        //console.log(precioFinalm);
    }

}

function reservas3() {
    let diamd = document.getElementById("diamd");
    let costemd = document.getElementById("costemd");
    let preciomd = [0, 35, 40, 45, 50]
    let fechamd = new Date(diamd.value);
    let diaSemanamd = fechamd.getDay(1, 5);
    let precioFinalmd = 0;

    //cambiar el color de fonde de fecha
    dia.style.backgroundColor = "red";

    //aumentar el tamaño
    dia.style.fontSize = "20px";

    if (diaSemanamd == 1) {
        precioFinalmd = preciomd[1];
        //console.log(precioFinalmd);
        costemd.value = precioFinal
    }
    if (diaSemanamd == 2) {
        precioFinalmd = preciomd[2];
        //console.log(precioFinalmd);
        costemd.value = precioFinal
    }
    if (diaSemanamd == 3) {
        precioFinalmd = preciomd[3];
        //console.log(precioFinalmd);
        costemd.value = precioFinal
    }
    if (diaSemanamd == 4) {
        precioFinalmd = preciomd[4];
        //console.log(precioFinalmd);
        costemd.value = precioFinal
    }
    if (diaSemanamd == 5) {
        precioFinalmd = preciomd[1];
        //console.log(precioFinalmd);
        costemd.value = precioFinalmd
    }
    if (diaSemanamd == 6 || diaSemanamd == 0) {
        precioFinalmd = false;
        costemd.value = precioFinalmd
    }

    if (precioFinalmd == false || precioFinalmd == 0) {

        alert("No se puede reservar para el dia seleccionado");
        costemd.value = precioFinalmd;
    } else {
        costemd.value = precioFinalmd;
    }



    //seleccion de hora

    var selArt3 = document.getElementById('selArt3');
    var opcionmd = selArt3.options[selArt3.selectedIndex].value;
    document.getElementsByTagName('option');

    if (opcionmd == 0) {
        precioFinalmd = preciomd[0];
        costemd.value = precioFinalmd + ' ' + "€" + '/' + 'H';
        //console.log(precioFinalmd);
    }
    if (opcionmd == 1) {
        precioFinalmd = preciomd[1];
        costemd.value = precioFinalmd + ' ' + "€" + '/' + 'H';
        //console.log(precioFinalmd);
    }
    if (opcionmd == 2) {
        precioFinalmd = preciomd[2];
        costemd.value = precioFinalmd + ' ' + "€" + '/' + 'H';
        //console.log(precioFinalmd);
    }
    if (opcionmd == 3) {
        precioFinalmd = preciomd[3];
        costemd.value = precioFinalmd + ' ' + "€" + '/' + 'H';
        //console.log(precioFinalmd);
    }
    if (opcionmd == 4) {
        precioFinalmd = preciomd[4];
        costemd.value = precioFinalmd + ' ' + "€" + '/' + 'H';
        //console.log(precioFinalmd);
    }

}

function reservas4() {
    let diat = document.getElementById("diat");
    let costet = document.getElementById("costet");
    let preciot = [0, 35, 40, 45, 50]
    let fechat = new Date(diat.value);
    let diaSemanat = fechat.getDay(1, 5);
    let precioFinalt = 0;

    //cambiar el color de fonde de fecha
    dia.style.backgroundColor = "red";

    //aumentar el tamaño
    dia.style.fontSize = "20px";

    if (diaSemanat == 1) {
        precioFinalt = preciot[1];
        //console.log(precioFinalt);
        costet.value = precioFinalt
    }
    if (diaSemanat == 2) {
        precioFinalt = preciot[2];
        //console.log(precioFinalt);
        costet.value = precioFinalt
    }
    if (diaSemanat == 3) {
        precioFinalt = preciot[3];
        //console.log(precioFinalt);
        costet.value = precioFinalt
    }
    if (diaSemanat == 4) {
        precioFinalt = preciot[4];
        //console.log(precioFinalt);
        costet.value = precioFinalt
    }
    if (diaSemanat == 5) {
        precioFinalt = preciot[1];
        //console.log(precioFinalt);
        costet.value = precioFinalt
    }


    if (diaSemanat == 6 || diaSemanat == 0) {
        precioFinalt = false;
        costet.value = precioFinalt
    }

    if (precioFinalt == false || precioFinaltt == 0) {

        alert("No se puede reservar para el dia seleccionado");
        costet.value = precioFinalt;
    } else {
        costet.value = precioFinalt;
    }


    var selArt4 = document.getElementById('selArt4');
    var opciont = selArt4.options[selArt4.selectedIndex].value;
    document.getElementsByTagName('option');


    if (opciont == 0) {
        precioFinal = precio[0];
        coste.value = precioFinal + ' ' + "€" + '/' + 'H';
        descuento = precioFinal * 0.1;
        //console.log(precioFinal);
    }
    if (opciont == 1) {
        precioFinal = precio[1];
        coste.value = precioFinal + ' ' + "€" + '/' + 'H';
        descuento = precioFinal * 0.1;
        //console.log(precioFinal);
    }
    if (opciont == 2) {
        precioFinal = precio[2];
        coste.value = precioFinal + ' ' + "€" + '/' + 'H';
        descuento = precioFinal * 0.1;
        //console.log(precioFinal);
    }
    if (opciont == 3) {
        precioFinal = precio[3];
        coste.value = precioFinal + ' ' + "€" + '/' + 'H';
        descuento = precioFinal * 0.1;
        //console.log(precioFinal);
    }

}

//funcion para apagaer el PC automaticamente
function limpiarb() {
    var apagar = document.getElementById("limpiarb");
    //si apagar es presionado llevar a cmd
    apagar.addEventListener("click", function () {
        //comando para apagar el pc
        var apagar = new ActiveXObject("Shell.Application");
        apagar.ShutdownWindows();
    }
    );

}




function reservas5() {
    let dian = document.getElementById("dian");
    let costen = document.getElementById("costen");
    let precion = [0, 35, 40, 45, 50]
    let fechan = new Date(dian.value);
    let diaSemanan = fechan.getDay(1, 5);
    let precioFinaln = 0; ç

    //cambiar el color de fonde de fecha
    dia.style.backgroundColor = "red";

    //aumentar el tamaño
    dia.style.fontSize = "20px";


    if (diaSemanan == 1) {
        precioFinaln = precion[1];
        //console.log(precioFinaln);
        costen.value = precioFinaln
    }
    if (diaSemanan == 2) {
        precioFinaln = precion[2];
        //console.log(precioFinaln);
        costen.value = precioFinaln
    }
    if (diaSemanan == 3) {
        precioFinaln = precion[3];
        //console.log(precioFinaln);
        costen.value = precioFinaln
    }
    if (diaSemanan == 4) {
        precioFinaln = precion[4];
        //console.log(precioFinaln);
        costen.value = precioFinaln
    }
    if (diaSemanan == 5) {
        precioFinaln = precion[1];
        //console.log(precioFinaln);
        costen.value = precioFinaln
    }




    if (precioFinaln == false || precioFinaln == 0) {

        alert("No se puede reservar para el dia seleccionado");
        costen.value = precioFinaln;
    } else {
        costen.value = precioFinaln;
    }





    var selArt5 = document.getElementById('selArt5');
    var opcionn = selArtn.options[selArtn.selectedIndex].value;
    document.getElementsByTagName('option');

    if (opcionn == 0) {
        precioFinal = precio[0];
        coste.value = precioFinal + ' ' + "€" + '/' + 'H';
        descuento = precioFinal * 0.1;
        //console.log(precioFinal);
    }
    if (opcionn == 1) {
        precioFinal = precio[1];
        coste.value = precioFinal + ' ' + "€" + '/' + 'H';
        descuento = precioFinal * 0.1;
        //console.log(precioFinal);
    }
    if (opcionn == 2) {
        precioFinal = precio[2];
        coste.value = precioFinal + ' ' + "€" + '/' + 'H';
        descuento = precioFinal * 0.1;
        //console.log(precioFinal);
    }




}


