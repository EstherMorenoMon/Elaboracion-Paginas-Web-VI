function validarFormulario() {
    var nombre, correo, apellido, expresion, usuario, pass;
    nombre = document.getElementById('nombre').value;
    correo = document.getElementById('correo').value;
    apellido = document.getElementById('apellidos').value;
    usuario = document.getElementById('usuario').value;
    pass = document.getElementById('pass').value;
    expresion = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (nombre === "" || apellido === "" || correo === "" || usuario === "" || pass === "" ) {
        alert("Los campos son obligatorios");
        return false
    }
    else if (!expresion.test(email.value)) {
        alert("Por favor, entre una cuenta de correo válida");
        return false
    }
}
