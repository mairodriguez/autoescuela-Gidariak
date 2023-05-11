function enviar() {
    // Obtenemos los datos del formulario
    let usuario = document.getElementById('user').value;
    let contraseña = document.getElementById('password').value;
    let nomusuario = document.getElementById('nomusuario').value;

    //si usuario y contraseña son correctos nomusuario
    if (usuario == "admin" && contraseña == "admin") {
        nomusuario = "admin";
    }
    else if (usuario == "alumno" && contraseña == "alumno") {
        nomusuario = "alumno";
    }
    else if (usuario == "profesor" && contraseña == "profesor") {
        nomusuario= "profesor";
    }

    // si usuario y contraseña son correcta llevar a la pagina de ofertass
    if (usuario == "admin" && contraseña == "admin") {
        window.location.href = "autoescuela/ofertas_cursos.html";
    }
    else if (usuario == "alumno" && contraseña == "alumno") {
        window.location.href = "autoescuela/ofertas_cursos.html";
    }
    else if (usuario == "profesor" && contraseña == "profesor") {
        window.location.href = "autoescuela/ofertas_cursos.html";
    }
    else {
        //alert("Usuario o contraseña incorrectos");
    }

    // Comprobamos que los campos no estén vacíos
    let datos = {
        user: usuario,
        password: contraseña
    }

    if (usuario == "" || contraseña == "") {
        //alert("No puede haber campos vacíos");
    } 

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
        localStorage.setItem('password',contraseña)

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

        // Eliminamos los datos del localStorage
        localStorage.removeItem('user');
        localStorage.removeItem('password');

        // Mostramos los datos por consola
        console.log(localStorage.getItem('user'));
        console.log(localStorage.getItem('password'));

        // Eliminamos todos los datos del localStorage
        localStorage.clear();

        // Mostramos los datos por consola
        console.log(localStorage.getItem('user'));
        console.log(localStorage.getItem('password'));
    


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
    
    //validar datos de usuario y contraseña
    if (usuarios.includes(usuario) && contraseñas.includes(contraseña)) {
        //alert("Usuario y contraseña correctos");
    }   
    



}

// Path: auto/autoescuela-Gidariak/ofertas_cursos.html
function cargarOfertas() {
    //ofertas
    let ofertas = [
        {
            id: 1,
            nombre: "Curso de coche",
            precio: 1000,
            descripcion: "Curso de coche",
            imagen: "https://www.autoescuelascastellon.com/wp-content/uploads/2019/01/autoescuela-castellon-1.jpg"
        },
        {
            id: 2,
            nombre: "Curso de moto",
            precio: 500,
            descripcion: "Curso de moto",
            imagen: "https://www.autoescuelascastellon.com/wp-content/uploads/2019/01/autoescuela-castellon-1.jpg"
        },
        {
            id: 3,
            nombre: "Curso de camión",
            precio: 1500,
            descripcion: "Curso de camión",
            imagen: "https://www.autoescuelascastellon.com/wp-content/uploads/2019/01/autoescuela-castellon-1.jpg"
        },
        {
            id: 4,
            nombre: "Curso de autobús",
            precio: 2000,
            descripcion: "Curso de autobús",
            imagen: "https://www.autoescuelascastellon.com/wp-content/uploads/2019/01/autoescuela-castellon-1.jpg"
        }]
    //guardar ofertas en localstorage
    localStorage.setItem('ofertas', JSON.stringify(ofertas));
    //obtener ofertas de localstorage
    ofertas = JSON.parse(localStorage.getItem('ofertas'));

}