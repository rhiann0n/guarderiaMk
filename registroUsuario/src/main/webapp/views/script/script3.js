window.onload=function () { //cuando cargue la págnia, ejecuta estas líneas
    let form = document.querySelector('#registroForm');
    form.nombre.addEventListener('input', validarNombre);
    form.apellidos.addEventListener('input', validarApellidos);
    form.edad.addEventListener('input', validarEdad);
    form.telefono.addEventListener('input', validarTelefono);
    form.email.addEventListener('input', validarEmail);
    form.password1.addEventListener('input', validarPass1);
    form.password2.addEventListener('input', validarPass2);
    let reset = document.querySelector("#reset");
    reset.addEventListener('click', function (){
        inputs = document.querySelectorAll('input');
        inputs.forEach(function (input){
            input.classList.remove('errorInput');
            input.classList.remove('validoInput');
        })
        let mensajesErorr = document.querySelectorAll(".msn");
        mensajesErorr.forEach(function (mensaje){
            mensaje.textContent = "";
        })
    })
    //evento input: se ha escrito dentro "input", va a la función validarTal
}

function validarNombre() {
    let nombre = document.querySelector('#nombre');
    let msnError = document.querySelector('.nombreError');

    if (!nombre.value.trim()) {
        nombre.classList.add("errorInput");
        nombre.classList.remove('validoInput');
        msnError.textContent = 'El nombre es obligatorio.';
        return false;
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value.trim())) {
        nombre.classList.add('errorInput');
        nombre.classList.remove('validoInput');
        msnError.textContent = 'El nombre solo puede contener letras y espacios';
        return false;
    } else {
        nombre.classList.remove('errorInput');
        nombre.classList.add('validoInput');
        msnError.textContent = '';
        return true;
    }
}

function validarApellidos() {
    let apellidos = document.querySelector('#apellidos');
    let msnError = document.querySelector('.apellidosError');

    if (!apellidos.value.trim()) {
        apellidos.classList.add("errorInput");
        apellidos.classList.remove('validoInput');
        msnError.textContent = 'Los apellidos son obligatorios';
        return false;
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellidos.value.trim())) {
        apellidos.classList.add('errorInput');
        apellidos.classList.remove('validoInput');
        msnError.textContent = 'Los apellidos solo pueden contener letras y espacios';
        return false;
    } else {
        apellidos.classList.remove('errorInput');
        apellidos.classList.add('validoInput');
        msnError.textContent = '';
        return true;
    }
}

function validarEdad(){
    let edad = document.querySelector('#edad');
    let msnError = document.querySelector('.edadError');
    if(!edad.value.trim() || isNaN(edad.value)) {
        edad.classList.add("errorInput");
        edad.classList.remove('validoInput');
        msnError.textContent = 'La edad es obligatoria y solo se admiten números';
        return false;
    } else if (edad.value<=0) {
        edad.classList.add("errorInput");
        edad.classList.remove('validoInput');
        msnError.textContent = 'La edad debe ser un número positivo mayor a 0';
        return false;
    } else {
        edad.classList.remove("errorInput");
        edad.classList.add('validoInput');
        msnError.textContent = '';
        return true;
    }
}

function validarTelefono(){
    let telefono = document.querySelector('#telefono');
    let msnError = document.querySelector('.telefonoError');
    if(!telefono.value.trim() || isNaN(telefono.value)) {
        telefono.classList.add("errorInput");
        telefono.classList.remove('validoInput');
        msnError.textContent = 'El nº de teléfono es obligatorio y numérico';
        return false;
    } else if (!telefono.value.match(/^[6789]\d{8}$/)) {
        telefono.classList.add('errorInput');
        telefono.classList.remove('validoInput');
        msnError.textContent = 'El teléfono debe comenzar por 6, 7, 8 o 9 y contener 9 dígitos'
        return false;
    } else {
        telefono.classList.remove("errorInput");
        telefono.classList.add('validoInput');
        msnError.textContent = '';
        return true;
    }
}

function validarEmail() {
    let email = document.querySelector('#email');
    let msnError = document.querySelector('.emailError');
    if(!email.value.trim()) {
        email.classList.add("errorInput");
        email.classList.remove('validoInput');
        msnError.textContent = 'El email es obligatorio';
        return false;
    } else if (!email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
        email.classList.add("errorInput");
        email.classList.remove('validoInput');
        msnError.textContent = 'El email no tiene el formato correcto';
        return false;
    } else {
        email.classList.remove('errorInput');
        email.classList.add('validoInput');
        msnError.textContent = '';
        return true;
    }
}
function validarPass1() {
    let pass1 = document.querySelector('#password1');
    let msnError = document.querySelector('.password1Error');
    if (!pass1.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
        pass1.classList.add("errorInput");
        pass1.classList.remove('validoInput');
        msnError.textContent = 'La contraseña debe tener una longitud mínima de 8 caracteres: al menos 1 mayúscula, 1 minúscula y 1 número'
        return false;
    } else {
        pass1.classList.remove('errorInput');
        pass1.classList.add('validoInput');
        msnError.textContent = '';
        return true;
    }
}

function validarPass2() {
    let pass1 = document.querySelector('#password1');
    let pass2 = document.querySelector('#password2');
    let msnError = document.querySelector('.password2Error');
    if (pass1.value!==pass2.value || !pass2.value.trim()) {
        pass1.classList.add("errorInput");
        pass1.classList.remove('validoInput');
        pass2.classList.add("errorInput");
        pass2.classList.remove('validoInput');
        msnError.textContent = 'Las contraseñas no son iguales';
        return false;
    } else {
        pass1.classList.remove('errorInput');
        pass1.classList.add('validoInput');
        pass2.classList.remove('errorInput');
        pass2.classList.add('validoInput');
        msnError.textContent = '';
        return true;
    }
}

function validarFormulario() {
    if (validarNombre() && validarApellidos() && validarEdad() && validarTelefono() && validarEmail()
        && validarPass1() && validarPass2())
        return true;
    else
        return false;
}