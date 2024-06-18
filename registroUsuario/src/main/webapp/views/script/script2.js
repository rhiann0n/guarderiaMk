function validarFormulario() {
    let form = document.getElementById("registroForm");
    let nombre = form.nombre;
    let apellidos = form.apellidos;
    let edad = form.edad;
    let telefono = form.telefono;
    let email = form.email;
    let pass1 = form.password1;
    let pass2 = form.password2;
    let salida = document.querySelector(".error");
    let errorMsn = "";
    let fallo = false;
    //limpiar los estilos de los inputs:
    let inputs = document.querySelectorAll("input");
    //recorre el array y elimina esa clase si está:
    inputs.forEach(input => input.classList.remove("errorInput"));

    //validar campos
    //en java trim quita los espacios vacíos de los extremos, ej.: _florin_ ← quitaría los espacios
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚëïñÑ\s]+$/.test(nombre.value.trim())) {
        errorMsn += "El nombre es obligatorio<br>";
        nombre.classList.add("errorInput"); // que se ponga el borde en rojo
        fallo=true;
    }
    if (!apellidos.value.trim()) {
        errorMsn += "Los apellidos son obligatorios<br>";
        apellidos.classList.add("errorInput");
        fallo=true;
    }
    if (!edad.value.trim() || isNaN(edad.value) || edad.value <= 0) {
        errorMsn += "La edad es obligatoria, y sólo se admiten números positivos<br>";
        edad.classList.add("errorInput");
        fallo=true;
    }
    if (!telefono.value.match(/^\d{9}$/)) {
        errorMsn += "El teléfono es obligatorio y debe contener 9 dígitos<br>";
        telefono.classList.add("errorInput");
        fallo=true;
    }
    if (!email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
        errorMsn += "El email debe introducirse con el formato correcto<br>";
        email.classList.add("errorInput");
        fallo=true;
    }
    if (pass1.value.trim() !== pass2.value.trim()){
        errorMsn += "Las contraseñas deben coincidir<br>";
        pass1.classList.add("errorInput");
        pass2.classList.add("errorInput");
        fallo=true;
    } else if (!pass1.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
        errorMsn += "La contraseña debe tener una longitud mínima de 8 caracteres: al menos 1 mayúscula, 1 minúscula y 1 número<br>";
        pass1.classList.add("errorInput");
        pass2.classList.add("errorInput");
        fallo=true;
    }
    if (fallo){
        salida.innerHTML = errorMsn;
        return false;
    } else {
        return true;
    }
}