function validarFormulario() {
    let form = document.getElementById("registroForm");
    let nombre = form.nombre;
    let apellidos = form.apellidos;
    let edad = form.edad;
    let telefono = form.telefono;
    let direccion = form.direccion;
    let email = form.email;
    let pass1 = form.password1;
    let pass2 = form.password2;
    let errorMsn = document.querySelector(".error");
    errorMsn.textContent = "";

    //limpiar los estilos de los inputs:
    let inputs = document.querySelectorAll("input");
    //recorre el array y elimina esa clase si está:
    inputs.forEach(input => input.classList.remove("errorInput"));

    //validar campos
    //en java trim quita los espacios vacíos de los extremos, ej.: _florin_ ← quitaría los espacios
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚëïñÑ\s]+$/.test(nombre.value.trim())) {
        errorMsn.textContent = "El nombre es obligatorio";
        nombre.classList.add("errorInput"); // que se ponga el borde en rojo
        return false;
    }
    if (!apellidos.value.trim()) {
        errorMsn.textContent = "Los apellidos son obligatorios";
        apellidos.classList.add("errorInput");
        return false;
    }
    if (!edad.value.trim() || isNaN(edad.value) || edad.value <= 0) {
        errorMsn.textContent = "La edad es obligatoria, y sólo se admiten números positivos";
        edad.classList.add("errorInput");
        return false;
    }
    if (!telefono.value.match(/^\d{9}$/)) {
        errorMsn.textContent = "El teléfono es obligatorio y debe contener 9 dígitos";
        telefono.classList.add("errorInput");
        return false;
    }
    if (!email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
        errorMsn.textContent = "El email debe introducirse con el formato correcto";
        email.classList.add("errorInput");
        return false;
    }
    if (pass1.value.trim() !== pass2.value.trim()){
        errorMsn.textContent = "Las contraseñas deben coincidir";
        pass1.classList.add("errorInput");
        pass2.classList.add("errorInput");
        return false;
    } else if (!pass1.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
        errorMsn.textContent = "La contraseña debe tener una longitud mínima de 8 caracteres: al menos 1 mayúscula, 1 minúscula y 1 número";
        pass1.classList.add("errorInput");
        pass2.classList.add("errorInput");
        return false;
    }
    return true;
}