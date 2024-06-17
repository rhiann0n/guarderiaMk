window.onload = function () {

    // Obtenemos los datos más relevantes del formulario
    let form = document.querySelector('#registroForm');
    form.nombreN.addEventListener('input', validarNombreN);
    form.apellidosN.addEventListener('input', validarApellidosN);
    form.fNacimientoN.addEventListener('input', validarfNacimientoN);
    form.direccionN.addEventListener('input', validarDireccionN);
    form.poblacionN.addEventListener('change', validarPoblacionN); //El "select" se obtiene de esta forma
    form.codigoPostN.addEventListener('input', validarCodigoPostN);
    form.nombreYapellidosPoT1.addEventListener('input', validarNombreYapellidosPoT1);
    form.dniPoT1.addEventListener('input', validarDniPoT1);
    form.profesionPoT1.addEventListener('input', validarProfesionPoT1);
    form.tlfPoT1.addEventListener('input', validarTlfPoT1);
    form.emailPoT1.addEventListener('input', validarEmailPoT1);

    //Validamos el botón de reseteo del formulario
    let reset = document.querySelector("#reset");
    reset.addEventListener('click', function (){
        inputs = document.querySelectorAll('input');
        inputs.forEach(function (input){
           input.classList.remove('errorInput');
           input.classList.remove('validoInput');
        })
        let mensajesError = document.querySelectorAll(".msn");
        mensajesError.forEach(function (mensaje){
            mensaje.textContent = "";
        })
    })
}
//Validamos el nombre del niño o de la niña
function validarNombreN() {
    let nombre = document.querySelector('#nombreN');
    let msnError = document.querySelector('.errorNombre');

    if (!nombre.value.trim()) {
        nombre.classList.add('errorInput');
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
//Validamos los apellidos del niño o la niña
function validarApellidosN() {
    let apellidos = document.querySelector('#apellidosN');
    let msnError = document.querySelector('.errorApellidos');
    if (!apellidos.value.trim()) {
        apellidos.classList.add("errorInput");
        apellidos.classList.remove('validoInput');
        msnError.textContent = 'Los apellidos son obligatorios.';
        return false;
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellidos.value.trim())) {
        apellidos.classList.add('errorInput');
        apellidos.classList.remove('validoInput');
        msnError.textContent = 'Los apellidos solo pueden contener letras y espacios.';
        return false;
    } else {
        apellidos.classList.remove('errorInput');
        apellidos.classList.add('validoInput');
        msnError.textContent = '';
        return true;
    }
}
//Validamos que la fecha de nacimiento sea correcta y no esté vacía
function validarfNacimientoN() {
    let fNacimiento = document.querySelector('#fNacimientoN');
    let msnError = document.querySelector('.errorFnacimientoN');

    function esFechaValida(fecha) {
        const hoy = new Date();
        const fechaNacimiento = new Date(fecha);
        return fechaNacimiento < 2024;
    }
    if (fNacimiento.value.trim() === '') {
        fNacimiento.classList.add('errorInput');
        fNacimiento.classList.remove('validoInput');
        msnError.textContent = 'La fecha de nacimiento es obligatoria.';
        return false;
    } else if (!esFechaValida(fNacimiento.value)) {
        fNacimiento.classList.add('errorInput');
        fNacimiento.classList.remove('validoInput');
        msnError.textContent = 'Debe ser una fecha válida en el pasado.';
        return false;
    } else {
        fNacimiento.classList.remove('errorInput');
        fNacimiento.classList.add('validoInput');
        return true;
    }
}
//Validamos que el campo de la dirección no esté vacía
function validarDireccionN() {
    let direccionN = document.querySelector('#direccionN');
    let msnError = document.querySelector('.errorDirecN');
    if (!direccionN.value.trim()) {
        direccionN.classList.add('errorInput');
        direccionN.classList.remove('validoInput');
        msnError.textContent = 'La dirección es obligatoria.';
        return false;
    } else {
        direccionN.classList.remove('errorInput');
        direccionN.classList.add('validoInput');
        msnError.textContent = '';
        return true;
    }
}
//Validamos que se haya seleccionado una de las poblaciones del "select"
function validarPoblacionN() {
    let poblacionN = document.querySelector('#poblacionN');
    let msnError = document.querySelector('.errorPoblacionN');
    if (poblacionN.value === '') {
        poblacionN.classList.add('errorInput');
        poblacionN.classList.remove('validoInput');
        msnError.textContent = 'Debe seleccionar una población.';
        return false;
    } else {
        poblacionN.classList.remove('errorInput');
        poblacionN.classList.add('validoInput');
        msnError.textContent = '';
        return true;
    }

}
//Validamos que el Código Postal sea numérico y de 5 dígitos
function validarCodigoPostN() {
    let codigoPostalN = document.querySelector('#codigoPostN');
    let msnError = document.querySelector('.errorCodigoPn');
    if (codigoPostalN.value.trim() === '') {
        codigoPostalN.classList.add('errorInput');
        codigoPostalN.classList.remove('validoInput');
        msnError.textContent = 'El Código Postal es obligatorio.';
        return false;
    } else if (!/^\d{5}$/.test(codigoPostalN)) {
        codigoPostalN.classList.add('errorInput');
        codigoPostalN.classList.remove('validoInput');
        msnError.textContent = 'Debe ser un número de 5 dígitos';
        return false;
    } else {
        codigoPostalN.classList.remove('errorInput');
        codigoPostalN.classList.add('validoInput');
        msnError.textContent = '';
        return true;
    }

}
//Validamos el nombre y los apellidos del tutor principal
function validarNombreYapellidosPoT1() {
    let nombreYapellidos = document.querySelector('#nombreYapellidosPoT1');
    let msnError = document.querySelector('.errorNombrePoT');
    if (!nombreYapellidos.value.trim()) {
        nombreYapellidos.classList.add('errorInput');
        nombreYapellidos.classList.remove('validoInput');
        msnError.textContent = 'Este campo es obligatorio.';
        return false;
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombreYapellidos.value.trim())) {
        nombreYapellidos.classList.add('errorInput');
        nombreYapellidos.classList.remove('validoInput');
        msnError.textContent = 'Solo puede contener letras y espacios';
        return false;
    } else {
        nombreYapellidos.classList.remove('errorInput');
        nombreYapellidos.classList.add('validoInput');
        msnError.textContent = '';
        return true;
    }
}
//Validamos el DNI del tutor principal
function validarDniPoT1() {

}
//Validamos la profesión del tutor principal
function validarProfesionPoT1() {
    let profesion = document.querySelector('#profesionPoT1');
    let msnError = document.querySelector('.errorProfPoT1');
    if (!profesion.value.trim()) {
        profesion.classList.add('errorInput');
        profesion.classList.remove('validoInput');
        msnError.textContent = 'Este campo es obligatorio.';
        return false;
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(profesion.value.trim())) {
        profesion.classList.add('errorInput');
        profesion.classList.remove('validoInput');
        profesion.textContent = 'Solo puede contener letras y espacios';
        return false;
    } else {
        profesion.classList.remove('errorInput');
        profesion.classList.add('validoInput');
        msnError.textContent = '';
        return true;
    }
}

//Validamos el teléfono del tutor principal
    function validarTlfPoT1() {
        let telefono = document.querySelector('#tlfPoT1');
        let msnError = document.querySelector('.errorTlfPoT1');
        if (!telefono.value.trim() || isNaN(telefono.value)) {
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

//Validamos el email del tutor principal
    function validarEmailPoT1() {
        let email = document.querySelector('#emailPoT1');
        let msnError = document.querySelector('.errorMailPoT1');
        if (!email.value.trim()) {
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

//Validamos el formulario completo de forma simplificada
    function validarForm() {
        return !!(validarNombreN() && validarApellidosN() && validarfNacimientoN() && validarDireccionN() && validarPoblacionN() &&
            validarCodigoPostN() && validarNombreYapellidosPoT1() && validarDniPoT1() && validarProfesionPoT1() &&
            validarTlfPoT1() && validarEmailPoT1());
}
