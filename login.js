function enviar() {
    // Obtenemos los datos del formulario
    let usuario = document.getElementById('user').value;
    let contraseña = document.getElementById('password').value;

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
            alert("Usuario encontrado");
            window.location.href = "./INDEX.HTML";
        } else {
            alert("Usuario o contraseña incorrectos");
        }

    // Comprobamos que los campos no estén vacíos
    let datos = {
        user: usuario,
        password: contraseña
    }

    if (usuario == "" || contraseña == "") {
        alert("No puede haber campos vacíos");
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
                    alert("Usuario o contraseña incorrectos");
                }
            });
            //Si usuario y contraseña son correctos enviar al la pagina principal
            if (usuario == "admin" && contraseña == "admin") {
                window.location.href = "./INDEX.HTML";
            } else if (usuario == "alumno" && contraseña == "alumno") {
                window.location.href = "./INDEX.HTML";
            } else if (usuario == "profesor" && contraseña == "profesor") {
                window.location.href = "./INDEX.HTML";
            } else {
                alert("Usuario o contraseña incorrectos");
            }

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

}
}