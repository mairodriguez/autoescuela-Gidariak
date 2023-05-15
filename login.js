function enviar() {
    // Obtenemos los datos del formulario
    let usuario = document.getElementById('user').value;
    let contraseña = document.getElementById('password').value;
    let nomusuario = document.getElementById('nomusuario')
    let envia = document.getElementById('envia')
    //array de usuarios con 10 o mas
    let usuarios = ['admin', 'usuario', 'usuario2', 'usuario3', 'usuario4', 'usuario5', 'usuario6', 'usuario7',
        'usuario8', 'usuario9', 'usuario10', 'usuario11', 'usuario12', 'usuario13', 'usuario14',
        'usuario15', 'usuario16', 'usuario17', 'usuario18', 'usuario19', 'usuario20', 'usuario21',
        'usuario22', 'usuario23', 'usuario24', 'usuario25', 'usuario26', 'usuario27', 'usuario28', 'usuario29', 'usuario30']

    //array de contraseñas con 10 o mas
    let contraseñas = ['admin', 'usuario', 'usuario2', 'usuario3', 'usuario4', 'usuario5', 'usuario6', 'usuario7',
        'usuario8', 'usuario9', 'usuario10', 'usuario11', 'usuario12', 'usuario13', 'usuario14',
        'usuario15', 'usuario16', 'usuario17', 'usuario18', 'usuario19', 'usuario20', 'usuario21',
        'usuario22', 'usuario23', 'usuario24', 'usuario25', 'usuario26', 'usuario27', 'usuario28', 'usuario29', 'usuario30']


    //nomusuario es igual a envia
    if (usuarios.includes(usuario) && contraseñas.includes(contraseña)) {
        nomusuario.innerHTML = usuario;
        envia.style.display = "none";
        //alert("Usuario y contraseña válidos");
    } else {
        alert("Usuario y contraseña incorrectos");
    }





    // // for envia es igual a usuario y contraseña
    // if (usuario == nomusuario.value && contraseña == contraseñas[usuarios.indexOf(usuario)]) {
    //     // Creamos la cookie
    //     document.cookie = "usuario=" + usuario;
    //     // Creamos la cookie
    //     document.cookie = "contraseña=" + contraseña;
    //     // Creamos la cookie
    //     document.cookie = "nomusuario=" + nomusuario.value;
    //     // Creamos la cookie
    //     document.cookie = "envia=" + envia.value;
    //     // Creamos la cookie
    //     document.cookie = "id=" + id.value;
    // }

    console.log('1')

    //rellenar nomusuario al validar usuario y contraseña
    // if (usuario == "admin" && contraseña == "admin") {
    //     nomusuario.value = "admin"
    //     console.log(nomusuario)
    // }
    // else if (usuario == "alumno" && contraseña == "alumno") {
    //     nomusuario.value = "alumno"
    //     console.log(nomusuario)
    // }
    // else if (usuario == "profesor" && contraseña == "profesor") {
    //     nomusuario.value = "profesor"
    //     console.log(nomusuario)
    // }



    // si usuario y contrasena son correctas rellenar nomusuario 
    if (usuario == "admin" && contraseña == "admin") {
        nomusuario.value = "admin"
        console.log(nomusuario)
    }
    else if (usuario == "alumno" && contraseña == "alumno") {
        nomusuario.value = "alumno"
        console.log(nomusuario)
    }
    else if (usuario == "profesor" && contraseña == "profesor") {
        nomusuario.value = "profesor"
        console.log(nomusuario)
    }
    // cambiar el fondo, el tamaño de la letra y el color de la letra a nomusuario
    if (nomusuario.value == "admin") {
        nomusuario.style.backgroundColor = "red"
        nomusuario.style.fontSize = "20px"
        nomusuario.style.color = "white"
    }
    else if (nomusuario.value == "alumno") {
        nomusuario.style.backgroundColor = "blue"
        nomusuario.style.fontSize = "20px"
        nomusuario.style.color = "white"
    }
    else if (nomusuario.value == "profesor") {
        nomusuario.style.backgroundColor = "green"
        nomusuario.style.fontSize = "20px"
        nomusuario.style.color = "white"
    }

    //guardar nomusuario en localhost
    localStorage.setItem('nomusuario', JSON.stringify(nomusuario));


//      /*
//      // si usuario y contraseña son correcta llevar a la pagina de ofertass  
//      if (usuario == "admin" && contraseña == "admin") {
//          window.location.href = "../autoescuela/ofertas_cursos.html";
//          console.log(usuario, contraseña)
//      }
//      else if (usuario == "alumno" && contraseña == "alumno") {
//          window.location.href = "../autoescuela/ofertas_cursos.html";
//      }
//      else if (usuario == "profesor" && contraseña == "profesor") {
//          window.location.href = "../autoescuela/ofertas_cursos.html";
//      }
//      // comprobar campos vacios
//      if (usuario == "" || contraseña == "") {
//          alert("No puede haber campos vacíos");
//      }
//      */


    // Comprobamos que los campos no estén vacíos
    let datos = {
        user: usuario,
        password: contraseña
    }
    console.log(datos)

    // Enviamos los datos a la API
    // fetch('http://localhost:5500/login', {
    //     method: 'POST',
    //     body: JSON.stringify(datos),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }

    // })
    //     .then(function (response) {
    //         return response.json();
    //     })
    //     .then(function (data) {
    //         console.log(data);

    //     .then(res => res.json())
    //     .catch(error => console.error('Error:', error))
    //     .then(response => {
    //         // Si el usuario existe, se le redirige a la página de inicio
    //         if (response == "Usuario encontrado") {
    //             window.location.href = "http://localhost:5500/autoescuela/ofertas_cursos.html";
    //         } else {
    //             // Si el usuario no existe, se le muestra un mensaje de error
    //             //alert("Usuario o contraseña incorrectos");
    //         }

    //     });

    // Mostramos los datos en el formulario
    document.getElementById('user').value = usuario;
    document.getElementById('password').value = contraseña;
    // Mostramos los datos por consola
    console.log(localStorage.getItem('user'));
    console.log(localStorage.getItem('password'));




    //guardar usuario y contraseña en localhost
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    localStorage.setItem('contraseñas', JSON.stringify(contraseñas));

    //obtener usuario y contraseña de localstorage
    usuarios = JSON.parse(localStorage.getItem('usuarios'));
    contraseñas = JSON.parse(localStorage.getItem('contraseñas'));

    // for para validar usuario y contraseña
    // for (let i = 0; i < usuarios.length; i++) {
    //     if (usuario == usuarios[i] && contraseña == contraseñas[i]) {
    //         //alert("Usuario encontrado");
    //         location.href( "../autoescuela/ofertas_cursos.html");
    //     } else {
    //         //alert("Usuario o contraseña incorrectos");
    //     }
    // }


    // Limpiamos los campos
    // document.getElementById('user').value = "";
    // document.getElementById('password').value = "";

    if (localStorage.getItem('user') != null) {
        localStorage.removeItem('user');
    }
    if (localStorage.getItem('password') != null) {
        localStorage.removeItem('password');
    }

    // Guardamos los datos en el localStorage
    localStorage.setItem('user', usuario);
    localStorage.setItem('password', contraseña);
    // Obtenemos los datos del localStorage
    usuario = localStorage.getItem('user');
    contraseña = localStorage.getItem('password');
    // Mostramos los datos en el formulario
    document.getElementById('user').value = usuario;
    document.getElementById('password').value = contraseña;
    // Mostramos los datos por consola
    console.log(localStorage.getItem('user'));
    console.log(localStorage.getItem('password'));

    //guardar usuario y contraseña en localhost 
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    localStorage.setItem('contraseñas', JSON.stringify(contraseñas));
    //obtener usuario y contraseña de localstorage
    usuarios = JSON.parse(localStorage.getItem('usuarios'));
    contraseñas = JSON.parse(localStorage.getItem('contraseñas'));


}
//crear una funcion para añadir un mapa
function initMap() {
    //crear una variable para la localizacion de la autoescuela
    var autoescuela = { lat: 36.721261, lng: -4.421266 };
    //crear una variable para el mapa
    var mapas = new google.maps.Map(
        document.getElementById('mapa').innerHTML, { zoom: 16, center: autoescuela });
    //crear una variable para el marcador
    var marker = new google.maps.Marker({ position: autoescuela, map: map });
}

//aplicacion mapa para la web

function initMap() {
    //crear una variable para la localizacion de la autoescuela
    var autoescuela = { lat: 36.721261, lng: -4.421266 };
    //crear una variable para el mapa
    var mapas = new google.maps.Map(
        document.getElementById('mapa').innerHTML, { zoom: 16, center: autoescuela });

    //crear una variable para el marcador
    var marker = new google.maps.Marker({ position: autoescuela, map: map });
}



