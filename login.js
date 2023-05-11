function enviar() {
    // Obtenemos los datos del formulario
    let usuario = document.getElementById('user').value;
    let contraseña = document.getElementById('password').value;
    let nomusuario = document.getElementById('nomusuario').value;





    // guaradar  nomusuario en localhost
    localStorage.setItem('nomusuario', nomusuario.valueL);
    //obtener nomusuario de localstorage
    nomusuario.valueL = localStorage.getItem('nomusuario');

    // crear array de usuarios y contrañas
    let usuarios = ["admin", "alumno", "profesor"];
    let contraseñas = ["admin", "alumno", "profesor"];
    //guardar usuario y contraseña en localhost
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    localStorage.setItem('contraseñas', JSON.stringify(contraseñas));


    //obtener usuario y contraseña de localstorage
    usuarios = JSON.parse(localStorage.getItem('usuarios'));
    contraseñas = JSON.parse(localStorage.getItem('contraseñas'));

    // for para validar usuario y contraseña
    for (let i = 0; i < usuarios.length; i++) {
        if (usuario == usuarios[i] && contraseña == contraseñas[i]) {
            //alert("Usuario encontrado");
            window.location.href = "./";
        } else {
            //alert("Usuario o contraseña incorrectos");
        }

        // Comprobamos que los campos no estén vacíos
        let datos = {
            user: usuario,
            password: contraseña
        }

        if (usuario == "" || contraseña == "") {
            //alert("No puede haber campos vacíos");
        } else {
            // Enviamos los datos a la API
            fetch('http://localhost:5500/login', {
                method: 'POST',
                body: JSON.stringify(datos),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => {
                    // Si el usuario existe, se le redirige a la página de inicio
                    if (response == "Usuario encontrado") {
                        window.location.href = "http://localhost:5500/index.html";
                    } else {
                        // Si el usuario no existe, se le muestra un mensaje de error
                        //alert("Usuario o contraseña incorrectos");
                    }
                });

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

            // Mostramos los datos por consola
            console.log(localStorage.getItem('user'));
            console.log(localStorage.getItem('password'));

            // Obtenemos los datos del localStorage
            let user = localStorage.getItem('user');
            let password = localStorage.getItem('password');

            for (let i = 0; i < localStorage.length; i++) {
                let clave = localStorage.key(i);
                let valor = localStorage.getItem(clave);
                console.log(clave + " = " + valor);
            }
            // Mostramos los datos en el formulario
            document.getElementById('user').value = user;
            document.getElementById('password').value = password;
        }
        // guaradar  nomusuario en localhost
        localStorage.setItem('nomusuario', nomusuario.valueL);
        //obtener nomusuario de localstorage
        nomusuario.valueL = localStorage.getItem('nomusuario');

        // crear array de usuarios y contrañas
        let usuarios = ["admin", "alumno", "profesor"];
        let contraseñas = ["admin", "alumno", "profesor"];

        //guardar usuario y contraseña en localhost
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        localStorage.setItem('contraseñas', JSON.stringify(contraseñas));
        //obtener usuarios y contraseñas de localstorage
        usuarios = JSON.parse(localStorage.getItem('usuarios'));
        contraseñas = JSON.parse(localStorage.getItem('contraseñas'));
        // Mostramos los datos en el formulario
        document.getElementById('user').value = user;
        document.getElementById('password').value = password;
        // Mostramos los datos por consola
        console.log(localStorage.getItem('user'));
        console.log(localStorage.getItem('password'));

        //obtener usuario y contraseña de localstorage
        usuarios = JSON.parse(localStorage.getItem('usuarios'));
        contraseñas = JSON.parse(localStorage.getItem('contraseñas'));

        //si usuario y contraseña son correctos nomusuario
        if (usuario == "admin" && contraseña == "admin") {
            nomusuario = "admin";
        }
        else if (usuario == "alumno" && contraseña == "alumno") {
            nomusuario = "alumno";
        }
        else if (usuario == "profesor" && contraseña == "profesor") {
            nomusuario = "profesor";
        }
        // si usuario y contraseña son correcta llevar a la pagina de ofertass  
        if (usuario == "admin" && contraseña == "admin") {
            window.location.href = "./ofertas_cursos.html";
        }
        else if (usuario == "alumno" && contraseña == "alumno") {
            window.location.href = "./ofertas_cursos.html";
        }
        else if (usuario == "profesor" && contraseña == "profesor") {
            window.location.href = "./ofertas_cursos.html";
        }

    }
}
//crear una funcion para añadir un mapa
function initMap() {
    //crear una variable para la localizacion de la autoescuela
    var autoescuela = { lat: 36.721261, lng: -4.421266 };
    //crear una variable para el mapa
    var mapas = new google.maps.Map(
        document.getElementById('mapa'), { zoom: 16, center: autoescuela });
    //crear una variable para el marcador
    var marker = new google.maps.Marker({ position: autoescuela, map: map });





}

