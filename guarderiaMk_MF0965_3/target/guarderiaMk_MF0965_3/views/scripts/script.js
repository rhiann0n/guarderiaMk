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
//Validamos que la fecha de nacimiento no esté vacía
function validarfNacimientoN() {
    const fNacimiento = document.querySelector('#fNacimientoN');
    const msnError = document.querySelector('.errorFnacimientoN');
    msnError.textContent = '';
    if (fNacimiento.value.trim() === '') {
        fNacimiento.classList.remove('validoInput');
        fNacimiento.classList.add('errorInput');
        msnError.textContent = 'La fecha de nacimiento es obligatoria.';
        return false;
    }

    const fechaNacimiento = new Date(fNacimiento.value);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    if (edad < 3 || (edad === 3 && hoy.getMonth() < fechaNacimiento.getMonth()) || (edad === 3 && hoy.getMonth() === fechaNacimiento.getMonth() && hoy.getDate() < fechaNacimiento.getDate())) {
        fNacimiento.classList.remove('validoInput');
        fNacimiento.classList.add('errorInput');
        msnError.textContent = 'El niño debe tener al menos 3 años de edad.';
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
    } else if (!/^\d{5}$/.test(codigoPostalN.value)) {
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
    const dni = document.querySelector('#dniPoT1');
    const msnError = document.querySelector('.errorDniPoT1');

    if (!dni.value.trim()) {
        dni.classList.add('errorInput');
        dni.classList.remove('validoInput');
        msnError.textContent = 'El DNI es obligatorio.';
        return false;
    } else if (!validarDNI(dni.value.trim())) {
        dni.classList.add('errorInput');
        dni.classList.remove('validoInput');
        msnError.textContent = 'DNI no válido. Debe tener 8 dígitos seguidos de una letra correcta.';
        return false;
    } else {
        dni.classList.remove('errorInput');
        dni.classList.add('validoInput');
        msnError.textContent = '';
        return true;
    }
}
// Función específica para validar el campo del DNI (longitud y uso de letras y números válidos)
function validarDNI(dni) {
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const dniRegex = /^\d{8}[A-Za-z]$/;

    if (!dniRegex.test(dni)) {
        return false;
    }

    const numero = parseInt(dni.slice(0, 8), 10);
    const letra = dni.slice(-1).toUpperCase(); // Convertir la letra a mayúscula si no lo está
    const letraEsperada = letras[numero % 23];

    return letra === letraEsperada;
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
//Función para agregar autorizaciones
function agregarAutorizacion() {
    var autorizacionesDiv = document.getElementById("autorizaciones");
    var nuevaFila = document.createElement("div");
    nuevaFila.classList.add("autorizacion");
    nuevaFila.innerHTML = `
        <table>
            <tr>
                <td>
                    <label for="nomYapellR">Nombre y apellidos</label>
                    <input type="text" name="nomYapellR[]" required>
                </td>
                <td>
                    <label for="dniR">D.N.I.</label>
                    <input type="text" name="dniR[]" required>
                </td>
                <td>
                    <label for="tlfR">Teléfono</label>
                    <input type="text" name="tlfR[]" required>
                </td>
                <td>
                    <label for="relOparent">Relación o parentesco</label>
                    <input type="text" name="relOparent[]" required>
                </td>
                <td>
                    <button type="button" onclick="eliminarAutorizacion(this)">Eliminar</button>
                </td>
            </tr>
        </table>
    `;
        autorizacionesDiv.appendChild(nuevaFila);
}
// Función para eliminar una fila de autorización
function eliminarAutorizacion(botonEliminar) {
    var filaAutorizacion = botonEliminar.closest('.autorizacion');
    filaAutorizacion.remove();
}
function validarForm() {
    // Validar todos los campos del formulario
    const esNombreValido = validarNombreN();
    const sonApellidosValidos = validarApellidosN();
    const esFechaNacimientoValida = validarfNacimientoN();
    const esDireccionValida = validarDireccionN();
    const esPoblacionValida = validarPoblacionN();
    const esCodigoPostalValido = validarCodigoPostN();
    const esNombreTutorValido = validarNombreYapellidosPoT1();
    const esDniTutorValido = validarDniPoT1();
    const esProfesionTutorValida = validarProfesionPoT1();
    const esTelefonoTutorValido = validarTlfPoT1();
    const esEmailTutorValido = validarEmailPoT1();

    // Verificar si todos los campos son válidos
    if (
        esNombreValido &&
        sonApellidosValidos &&
        esFechaNacimientoValida &&
        esDireccionValida &&
        esPoblacionValida &&
        esCodigoPostalValido &&
        esNombreTutorValido &&
        esDniTutorValido &&
        esProfesionTutorValida &&
        esTelefonoTutorValido &&
        esEmailTutorValido
    ) {
        // Mostrar alerta de éxito
        alert('¡Formulario enviado correctamente!');
        return true; // Permitir el envío del formulario
    } else {
        // Si algún campo no es válido, no enviar el formulario
        return false;
    }
}