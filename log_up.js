// Version: 1.0
// Autor:  Gidariak
// Fecha:  2021/01/08 12:00:00

//php 
$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
$dni = $_POST['dni'];
$direccion = $_POST['direccion'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];
$password = $_POST['password'];
$password2 = $_POST['password2'];

//conexion a la base de datos
$conexion = mysqli_connect("localhost", "root auto", "", "autoescuela");

//consulta para insertar
$insertar = "INSERT INTO usuarios(nombre, apellidos, dni, direccion, telefono, email, password, password2) VALUES ('$nombre', '$apellidos', '$dni', '$direccion', '$telefono', '$email', '$password', '$password2')";
//ejecutar consulta
$resultado = mysqli_query($conexion, $insertar);

if (!$resultado) {
    echo 
    'Error al registrarse';
} else {
    echo
    'Usuario registrado exitosamente';
}
//cerrar conexion
mysqli_close($conexion);

// Funcion de registro de usuario
function log_up() {

    //Recogemos los datos del formulario

    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let dni = document.getElementById("dni").value;
    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("contraseña").value;
    let password2 = document.getElementById("contraseña2").value;

    //array para un usuarios cogiendo las variables de arriba

    let usuarios = [nombre, apellidos, dni, direccion, telefono, email, password, password2];

// array de nombres aleatorios

// array de apellidos ramdon

// array de dni ramdon

// array de direcciones ramdon

// array de telefonos ramdon

// array de emails ramdon

// array de contraseñas ramdon

// array de contraseñas ramdon



    //guardar usuario y contraseña en localhost
    localStorage.setItem('usuarios', JSON.stringify(usuarios));




    //Creamos un objeto con los datos del formulario
    let data = {
        nombre: nombre,
        apellidos: apellidos,
        dni: dni,
        direccion: direccion,
        telefono: telefono,
        email: email,
        password: password,
        password2: password2
    }

    //Creamos la url a la que vamos a enviar los datos

    let url = "http://localhost:5500/registro";

    //Enviamos los datos a la base de datos
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'

        }

        //Recibimos la respuesta de la base de datos
    }).then(res => res.json())

        .catch(error => console.error('Error:', error))

        .then(response => console.log('Success:', response));



    // //Comprobamos que todos los campos esten rellenos
    // if (nombre == "" || apellidos == "" || dni == "" || direccion == "" || telefono == "" || email == "" || password == "" || password2 == "") {
    //     // alert("Rellene todos los campos");
    //     return;
    // }

    //Comprobamos que el telefono tenga 9 digitos
    if (telefono.length != 9) {
        // // alert("El telefono debe tener 9 digitos");
        return console.log(telefono);
    }   


    //Comprobamos que el DNI tenga 9 caracteres
    if (dni.length != 9) {
        // // alert("El DNI debe tener 9 caracteres");
        return;
    }

    //Comprobamos que el email tenga el formato correcto
    if (!email.includes("@")) {
        // // alert("El email debe tener el formato correcto");
        return;
    }

    //Comprobamos que el nombre tenga al menos 3 caracteres
    if (nombre.length < 3) {
        // // alert("El nombre debe tener al menos 3 caracteres");
        return;
    }

    //Comprobamos que el apellido tenga al menos 3 caracteres
    if (apellidos.length < 3) {
        // // alert("El apellido debe tener al menos 3 caracteres");
        return;
    }

    //Comprobamos que las contraseñas coincidan
    if (password != password2) {
        // alert("Las contraseñas no coinciden");
        return;
    }

    //Comprobamos que la contraseña tenga al menos 8 caracteres
    if (password.length < 8) {
        // alert("La contraseña debe tener al menos 8 caracteres");
        return;
    }

    //Comprobamos que la contraseña tenga al menos una mayuscula
    if (password == password.toLowerCase()) {
        // alert("La contraseña debe tener al menos una mayuscula");
        return;
    }

    //Comprobamos que la contraseña tenga al menos una minuscula
    if (password == password.toUpperCase()) {
        // alert("La contraseña debe tener al menos una minuscula");
        return;
    }

    //Comprobamos que la contraseña tenga al menos un numero
    if (password.search(/[0-9]/) < 0) {
        // alert("La contraseña debe tener al menos un numero");
        return;
    }

    //Comprobamos que la contraseña tenga al menos un caracter especial
    if (password.search(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/) < 0) {
        // alert("La contraseña debe tener al menos un caracter especial");
        return;
    }

    //Comprobamos que el DNI tenga el formato correcto
    if (dni.charAt(8) != "-" || dni.charAt(0) == "-" || dni.charAt(1) == "-" || dni.charAt(2) == "-" || dni.charAt(3) == "-" || dni.charAt(4) == "-" || dni.charAt(5) == "-" || dni.charAt(6) == "-" || dni.charAt(7) == "-" || dni.charAt(8) == "-" || dni.charAt(9) == "-") {
        // alert("El DNI debe tener el formato correcto");
        return;
    }

    //Comprobamos que el DNI tenga el formato correcto
    if (dni.charAt(0) != dni.charAt(0).toUpperCase() || dni.charAt(1) != dni.charAt(1).toUpperCase() || dni.charAt(2) != dni.charAt(2).toUpperCase()) {
        // alert("El DNI debe tener el formato correcto");
        return;
    }

    //Comprobamos que el DNI tenga el formato correcto
    if (dni.charAt(3) != dni.charAt(3).toLowerCase() || dni.charAt(4) != dni.charAt(4).toLowerCase() || dni.charAt(5) != dni.charAt(5).toLowerCase() || dni.charAt(6) != dni.charAt(6).toLowerCase() || dni.charAt(7) != dni.charAt(7).toLowerCase() || dni.charAt(8) != dni.charAt(8).toLowerCase() || dni.charAt(9) != dni.charAt(9).toLowerCase()) {
        // alert("El DNI debe tener el formato correcto");
        return;
    }

    //Comprobamos que el DNI tenga el formato correcto
    if (dni.charAt(0) != "X" && dni.charAt(0) != "Y" && dni.charAt(0) != "Z" && dni.charAt(0) != "x" && dni.charAt(0) != "y" && dni.charAt(0) != "z") {
        // alert("El DNI debe tener el formato correcto");
        return;
    }

    //Comprobamos que el DNI tenga el formato correcto
    if (dni.charAt(1) != dni.charAt(1).toUpperCase() || dni.charAt(2) != dni.charAt(2).toUpperCase()) {
        // alert("El DNI debe tener el formato correcto");
        return;
    }

    //Comprobamos que el DNI tenga el formato correcto
    if (dni.charAt(0) == "X" && dni.charAt(1) == "X" && dni.charAt(2) == "X") {
        // alert("El DNI debe tener el formato correcto");
        return;
    }

    //Comprobamos que el DNI tenga el formato correcto
    if (dni.charAt(0) == "Y" && dni.charAt(1) == "Y" && dni.charAt(2) == "Y") {
        // alert("El DNI debe tener el formato correcto");
        return;
    }

    //Comprobamos que el DNI tenga el formato correcto
    if (dni.charAt(0) == "Z" && dni.charAt(1) == "Z" && dni.charAt(2) == "Z") {
        // alert("El DNI debe tener el formato correcto");
        return;
    }

    //Comprobamos que el DNI tenga el formato correcto
    if (dni.charAt(0) == "x" && dni.charAt(1) == "x" && dni.charAt(2) == "x") {
        // alert("El DNI debe tener el formato correcto");
        return;
    }

    //Comprobamos que el DNI tenga el formato correcto
    if (dni.charAt(0) == "y" && dni.charAt(1) == "y" && dni.charAt(2) == "y") {
        // alert("El DNI debe tener el formato correcto");
        return;
    }

    //Comprobamos que el DNI tenga el formato correcto
    if (dni.charAt(0) == "z" && dni.charAt(1) == "z" && dni.charAt(2) == "z") {
        // alert("El DNI debe tener el formato correcto");
        return;
    }

    //Comprobamos que el DNI tenga 8 numeros
    if (dni.charAt(3) == "-" || dni.charAt(4) == "-" || dni.charAt(5) == "-" || dni.charAt(6) == "-" || dni.charAt(7) == "-" || dni.charAt(8) == "-" || dni.charAt(9) == "-" || dni.charAt(10) == "-") {
        // alert("El DNI debe tener 8 numeros");
        return;
    }

    //Comprobamos que el DNI tenga 8 numeros
    if (dni.charAt(3) == "0" && dni.charAt(4) == "0" && dni.charAt(5) == "0" && dni.charAt(6) == "0" && dni.charAt(7) == "0" && dni.charAt(8) == "0" && dni.charAt(9) == "0") {
        // alert("El DNI debe tener 8 numeros");
        return;
    }

    //Comprobamos que el DNI tenga 8 numeros
    if (dni.charAt(3) == "1" && dni.charAt(4) == "1" && dni.charAt(5) == "1" && dni.charAt(6) == "1" && dni.charAt(7) == "1" && dni.charAt(8) == "1" && dni.charAt(9) == "1") {
        // alert("El DNI debe tener 8 numeros");
        return;
    }

    //Comprobamos que el DNI tenga 8 numeros
    if (dni.charAt(3) == "2" && dni.charAt(4) == "2" && dni.charAt(5) == "2" && dni.charAt(6) == "2" && dni.charAt(7) == "2" && dni.charAt(8) == "2" && dni.charAt(9) == "2") {
        // alert("El DNI debe tener 8 numeros");
        return;
    }

    //Comprobamos que el DNI tenga 8 numeros
    if (dni.charAt(3) == "3" && dni.charAt(4) == "3" && dni.charAt(5) == "3" && dni.charAt(6) == "3" && dni.charAt(7) == "3" && dni.charAt(8) == "3" && dni.charAt(9) == "3") {
        // alert("El DNI debe tener 8 numeros");
        return;
    }

    //Comprobamos que el DNI tenga 8 numeros
    if (dni.charAt(3) == "4" && dni.charAt(4) == "4" && dni.charAt(5) == "4" && dni.charAt(6) == "4" && dni.charAt(7) == "4" && dni.charAt(8) == "4" && dni.charAt(9) == "4") {
        // alert("El DNI debe tener 8 numeros");
        return;
    }

    //Comprobamos que el DNI tenga 8 numeros
    if (dni.charAt(3) == "5" && dni.charAt(4) == "5" && dni.charAt(5) == "5" && dni.charAt(6) == "5" && dni.charAt(7) == "5" && dni.charAt(8) == "5" && dni.charAt(9) == "5") {
        // alert("El DNI debe tener 8 numeros");
        return;
    }

    //Comprobamos que el DNI tenga 8 numeros
    if (dni.charAt(3) == "6" && dni.charAt(4) == "6" && dni.charAt(5) == "6" && dni.charAt(6) == "6" && dni.charAt(7) == "6" && dni.charAt(8) == "6" && dni.charAt(9) == "6") {
        // alert("El DNI debe tener 8 numeros");
        return;
    }

    //Comprobamos que el DNI tenga 8 numeros
    if (dni.charAt(3) == "7" && dni.charAt(4) == "7" && dni.charAt(5) == "7" && dni.charAt(6) == "7" && dni.charAt(7) == "7" && dni.charAt(8) == "7" && dni.charAt(9) == "7") {
        // alert("El DNI debe tener 8 numeros");
        return;
    }

    //Comprobamos que el DNI tenga 8 numeros
    if (dni.charAt(3) == "8" && dni.charAt(4) == "8" && dni.charAt(5) == "8" && dni.charAt(6) == "8" && dni.charAt(7) == "8" && dni.charAt(8) == "8" && dni.charAt(9) == "8") {
        // alert("El DNI debe tener 8 numeros");
        return;
    }

    //Comprobamos que el DNI tenga 8 numeros
    if (dni.charAt(3) == "9" && dni.charAt(4) == "9" && dni.charAt(5) == "9" && dni.charAt(6) == "9" && dni.charAt(7) == "9" && dni.charAt(8) == "9" && dni.charAt(9) == "9") {
        // alert("El DNI debe tener 8 numeros");
        return;
    }

    //Comprobamos que el DNI tenga 8 numeros
    if (dni.charAt(3) == "0" && dni.charAt(4) == "0" && dni.charAt(5) == "0" && dni.charAt(6) == "0" && dni.charAt(7) == "0" && dni.charAt(8) == "0" && dni.charAt(9) == "0") {
        // alert("El DNI debe tener 8 numeros");
        return;
    }

    //Comprobamos que el DNI tenga 1 letra
    if (dni.charAt(10) == "0" || dni.charAt(10) == "1" ||
        dni.charAt(10) == "2" || dni.charAt(10) == "3" ||
        dni.charAt(10) == "4" || dni.charAt(10) == "5" ||
        dni.charAt(10) == "6" || dni.charAt(10) == "7" ||
        dni.charAt(10) == "8" ||
        dni.charAt(10) == "9" || dni.charAt(10) == "A" ||
        dni.charAt(10) == "B" || dni.charAt(10) == "C" || dni.charAt(10) ==
        "D" || dni.charAt(10) == "E" || dni.charAt(10) == "F" || dni.charAt(10) == "G" || dni.charAt(10) == "H"
        || dni.charAt(10) == "I" || dni.charAt(10) == "J" || dni.charAt(10) == "K" || dni.charAt(10) == "L" ||
        dni.charAt(10) == "M" || dni.charAt(10) == "N" || dni.charAt(10) == "O" || dni.charAt(10) == "P" ||
        dni.charAt(10) == "Q" || dni.charAt(10) == "R" || dni.charAt(10) == "S" || dni.charAt(10) == "T" ||
        dni.charAt(10) == "U" || dni.charAt(10) == "V" || dni.charAt(10) == "W" || dni.charAt(10) == "X" ||
        dni.charAt(10) == "Y" || dni.charAt(10) == "Z") {
        // alert("El DNI debe tener 1 letra");
        return;
    }

    //Comprobamos que el DNI tenga 1 letra
    if (dni.charAt(10) == "a" || dni.charAt(10) == "b" ||
        dni.charAt(10) == "c" || dni.charAt(10) == "d" ||
        dni.charAt(10) == "e" || dni.charAt(10) == "f" ||
        dni.charAt(10) == "g" || dni.charAt(10) == "h"
        || dni.charAt(10) == "i" || dni.charAt(10) == "j" ||
        dni.charAt(10) == "k" || dni.charAt(10) == "l"
        || dni.charAt(10) == "m" || dni.charAt(10) == "n" ||
        dni.charAt(10) == "o" || dni.charAt(10) == "p"
        || dni.charAt(10) == "q" || dni.charAt(10) == "r" ||
        dni.charAt(10) == "s" || dni.charAt(10) == "t"
        || dni.charAt(10) == "u" || dni.charAt(10) == "v" ||
        dni.charAt(10) == "w" || dni.charAt(10) == "x"
        || dni.charAt(10) == "y" || dni.charAt(10) == "z") {
        // alert("El DNI debe tener 1 letra");
        return;
    }

    //Comprobamos que el DNI tenga 1 letra 
    if (dni.charAt(10) == "ñ" || dni.charAt(10) == "Ñ") {
        // alert("El DNI debe tener 1 letra");
        return;
    }

    //Comprobamos que el DNI tenga 1 letra   
    if (dni.charAt(10) == "1" || dni.charAt(10) == "2" ||
        dni.charAt(10) == "3" || dni.charAt(10) == "4" ||
        dni.charAt(10) == "5" || dni.charAt(10) == "6" ||
        dni.charAt(10) == "7" || dni.charAt(10) == "8" ||
        dni.charAt(10) == "9" || dni.charAt(10) == "0") {
        // alert("El DNI debe tener 1 letra");
        return;
    }

    //Comprobamos que el DNI tenga 1 letra  
    if (dni.charAt(10) == "!" || dni.charAt(10) == '"' || dni.charAt(10) == "·" || dni.charAt(10) == "$"
        || dni.charAt(10) == "%" || dni.charAt(10) == "&" || dni.charAt(10) == "/" || dni.charAt(10) == "("
        || dni.charAt(10) == ")" || dni.charAt(10) == "=" || dni.charAt(10) == "?" || dni.charAt(10) == "¿"
        || dni.charAt(10) == "'" || dni.charAt(10) == "¡" || dni.charAt(10) == "¿" || dni.charAt(10) == "`"
        || dni.charAt(10) == "^" || dni.charAt(10) == "+" || dni.charAt(10) == "*" || dni.charAt(10) == "["
        || dni.charAt(10) == "]" || dni.charAt(10) == "{" || dni.charAt(10) == "}" || dni.charAt(10) == "¨"
        || dni.charAt(10) == "´" || dni.charAt(10) == "@" || dni.charAt(10) == "#" || dni.charAt(10) == "|"
        || dni.charAt(10) == "¬" || dni.charAt(10) == "€" || dni.charAt(10) == "¬" || dni.charAt(10) == "ç"
        || dni.charAt(10) == "Ç" || dni.charAt(10) == "´" || dni.charAt(10) == "~" || dni.charAt(10) == "´"
        || dni.charAt(10) == "ç" || dni.charAt(10) == "Ç" || dni.charAt(10) == "´" || dni.charAt(10) == "~"
        || dni.charAt(10) == "´" || dni.charAt(10) == "ç" || dni.charAt(10) == "Ç" || dni.charAt(10) == "´"
        || dni.charAt(10) == "~" || dni.charAt(10) == "´" || dni.charAt(10) == "ç" || dni.charAt(10) == "Ç"
        || dni.charAt(10) == "´" || dni.charAt(10) == "~") {
        // alert("El DNI debe tener 1 letra");
        return;
    }

    //Comprobamos que el DNI tenga 1 letra  
    if (dni.charAt(10) == "," || dni.charAt(10) == "." || dni.charAt(10) == ";" || dni.charAt(10) == ":"
        || dni.charAt(10) == "_" || dni.charAt(10) == "-" || dni.charAt(10) == " " || dni.charAt(10) == "ª"
        || dni.charAt(10) == "º" || dni.charAt(10) == "<" || dni.charAt(10) == ">" || dni.charAt(10) == "ç"
        || dni.charAt(10) == "Ç" || dni.charAt(10) == "´" || dni.charAt(10) == "~" || dni.charAt(10) == "´"
        || dni.charAt(10) == "ç" || dni.charAt(10) == "Ç" || dni.charAt(10) == "´" || dni.charAt(10) == "~"
        || dni.charAt(10) == "´" || dni.charAt(10) == "ç" || dni.charAt(10) == "Ç" || dni.charAt(10) == "´"
        || dni.charAt(10) == "~" || dni.charAt(10) == "´" || dni.charAt(10) == "ç" || dni.charAt(10) == "Ç"
        || dni.charAt(10) == "´" || dni.charAt(10) == "~") {
        // alert("El DNI debe tener 1 letra");
        return;
    }

    //Comprobamos que el DNI tenga 1 letra 
    if (dni.charAt(10) == "ç" || dni.charAt(10) == "Ç" || dni.charAt(10) == "´" || dni.charAt(10) == "~"
        || dni.charAt(10) == "´" || dni.charAt(10) == "ç" || dni.charAt(10) == "Ç" || dni.charAt(10) == "´"
        || dni.charAt(10) == "~" || dni.charAt(10) == "´" || dni.charAt(10) == "ç" || dni.charAt(10) == "Ç"
        || dni.charAt(10) == "´" || dni.charAt(10) == "~" || dni.charAt(10) == "´" || dni.charAt(10) == "ç"
        || dni.charAt(10) == "Ç" || dni.charAt(10) == "´" || dni.charAt(10) == "~" || dni.charAt(10) == "´"
        || dni.charAt(10) == "ç" || dni.charAt(10) == "Ç" || dni.charAt(10) == "´" || dni.charAt(10) == "~") {
        // alert("El DNI debe tener 1 letra");
        return;
    }


    //Comprobamos que el DNI tenga 1 letra y que sea correcta
    if (dni.charAt(10) == "ç" || dni.charAt(10) == "Ç" || dni.charAt(10) == "´" || dni.charAt(10) == "~"
        || dni.charAt(10) == "´" || dni.charAt(10) == "ç" || dni.charAt(10) == "Ç" || dni.charAt(10) == "´"
        || dni.charAt(10) == "~" || dni.charAt(10) == "´" || dni.charAt(10) == "ç" || dni.charAt(10) == "Ç"
        || dni.charAt(10) == "´" || dni.charAt(10) == "~" || dni.charAt(10) == "´" || dni.charAt(10) == "ç"
        || dni.charAt(10) == "Ç" || dni.charAt(10) == "´" || dni.charAt(10) == "~" || dni.charAt(10) == "´"
        || dni.charAt(10) == "ç" || dni.charAt(10) == "Ç" || dni.charAt(10) == "´" || dni.charAt(10) == "~") {
        // alert("El DNI debe tener 1 letra"); //Mensaje de error
        return;
    } else { //Si el DNI es correcto, se muestra un mensaje de confirmacion
        // alert("DNI correcto");
        //Mensaje de confirmacion


        //Se muestra el DNI en el campo de texto
        document.getElementById("dni").value = dni;

    }

    //Comprobamos que el DNI tenga 1 letra y que sea correcta
    if (dni.charAt(10) == "ç" || dni.charAt(10) == "Ç" || dni.charAt(10) == "´" || dni.charAt(10) == "~" ||
        dni.charAt(10) == "´" || dni.charAt(10) == "ç" || dni.charAt(10) == "Ç" || dni.charAt(10) == "´" ||
        dni.charAt(10) == "~" || dni.charAt(10) == "´" || dni.charAt(10) == "ç" || dni.charAt(10) == "Ç" ||
        dni.charAt(10) == "´" || dni.charAt(10) == "~" || dni.charAt(10) == "´" || dni.charAt(10) == "ç" ||
        dni.charAt(10) == "Ç" || dni.charAt(10) == "´" || dni.charAt(10) == "~" || dni.charAt(10) == "´" ||
        dni.charAt(10) == "ç" || dni.charAt(10) == "Ç" || dni.charAt(10) == "´" || dni.charAt(10) == "~") {
        // alert("El DNI debe tener 1 letra"); //Mensaje de error
        return;
    }




    // limpiar el formulario
    nombre.value = "";
    apellidos.value = "";
    dni.value = "";
    email.value = "";
    telefono.value = "";
    direccion.value = "";
    password.value = "";
    password2.value = "";

    // guardar los datos en el localstorage
    localStorage.setItem("nombre", nombre.value);
    localStorage.setItem("apellidos", apellidos.value);
    localStorage.setItem("dni", dni.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("telefono", telefono.value);
    localStorage.setItem("direccion", direccion.value);
    localStorage.setItem("password", password.value);
// ENVIAR CORREO DE VALIDACION
    Email.send({
        Host: "smtp.gmail.com",
        Username: ""
        , Password: ""
        , To: email.value
        , From: ""
        , Subject: "Validacion de cuenta"
        , Body: "Hola, para validar tu cuenta de usuario, haz click en el siguiente enlace: http://localhost:8080/validar.html"
    }).then(
        message => alert("mail sent successfully")
        , error => alert("Error occurred while sending mail")   
        );
    

    
    
    // mostrar los datos en el formulario
    document.getElementById("nombre").value = localStorage.getItem("nombre");
    document.getElementById("apellidos").value = localStorage.getItem("apellidos");
    document.getElementById("dni").value = localStorage.getItem("dni");
    document.getElementById("email").value = localStorage.getItem("email");
    document.getElementById("telefono").value = localStorage.getItem("telefono");
    document.getElementById("direccion").value = localStorage.getItem("direccion");
    document.getElementById("password").value = localStorage.getItem("password");

    if (localStorage.getItem("nombre") != null) {
        document.getElementById("nombre").value = localStorage.getItem("nombre");
    }
    if (localStorage.getItem("apellidos") != null) {
        document.getElementById("apellidos").value = localStorage.getItem("apellidos");
    }
    if (localStorage.getItem("dni") != null) {
        document.getElementById("dni").value = localStorage.getItem("dni");
    }
    if (localStorage.getItem("email") != null) {
        document.getElementById("email").value = localStorage.getItem("email");
    }
    if (localStorage.getItem("telefono") != null) {
        document.getElementById("telefono").value = localStorage.getItem("telefono");
    }
    if (localStorage.getItem("direccion") != null) {
        document.getElementById("direccion").value = localStorage.getItem("direccion");
    }
    if (localStorage.getItem("password") != null) {
        document.getElementById("password").value = localStorage.getItem("password");
    }

    for (var i = 0; i < localStorage.length; i++) {
        var clave = localStorage.key(i);
        var valor = localStorage.getItem(clave);
        console.log(clave + " = " + valor);
    }

    // si los elemntos son validos pasar a la pagina principal

    if (nombre.value != "" && apellidos.value != "" && dni.value != "" &&
     email.value != "" && telefono.value != "" && direccion.value != "" &&
      password.value != "" && password2.value != "") {
        location.href = "index.html";
    } else {
        // alert("Rellene todos los campos");
    }

    // si los elemntos son validos pasar a la pagina principal
 
}

