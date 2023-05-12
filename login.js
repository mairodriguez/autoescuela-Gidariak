function enviar() {
    // Obtenemos los datos del formulario
    let usuario = document.getElementById('user').value;
    let contraseña = document.getElementById('password').value;
    let nomusuario = usuario.valor
    console.log('1')
    

    
    // console.log(usuario, contraseña);


    // si usuario y contrasena son correctas rrellenar nomusuario
    // if (usuario == "admin" && contraseña == "admin") {
    //      nomusuario.value = "admin"
    //     console.log(nomusuario)
    // }
    // else if (usuario == "alumno" && contraseña == "alumno") {
    //         nomusuario.value = "alumno"
    //         console.log(nomusuario)
    // }
    // else if (usuario == "profesor" && contraseña == "profesor") {
    //         nomusuario.value = "profesor"
    //         console.log(nomusuario)
    // }
    
    
    // si usuario y contraseña son incorrecta mostrar mensaje de error
    // si usuario y contraseña son correcta llevar a la pagina de ofertass  
    if (usuario == "admin" && contraseña == "admin") {
        window.location.href = "../autoescuela/ofertas_cursos.html";
        console.log(usuario, contraseña)
    }
    else if (usuario == "alumno" && contraseña == "alumno") {
        window.location.href = "../autoescuela/ofertas_cursos.html";
    }
    else if (usuario == "profesor" && contraseña == "profesor") {
        window.location.href = "../autoescuela/ofertas_cursos.html";
    }
    // comprobar campos vacios
    if (usuario == "" || contraseña == "") {
        alert("No puede haber campos vacíos");
    }

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
    document.getElementById('user').value = "";
    document.getElementById('password').value = "";

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
    let user = localStorage.getItem('user');
    let password = localStorage.getItem('password');

    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        let valor = localStorage.getItem(clave);
        console.log(clave + " = " + valor);
    }


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

