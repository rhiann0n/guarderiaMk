<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="views/css/responsive.css">
    <link rel="stylesheet" href="views/css/style.css">
    <script src="views/scripts/script.js"></script>
    <link rel="icon" href="views/img/logo.jpg">
    <title>Guardería Mi KINDER</title>
</head>

<body>
<div class="container col-12">
    <img src="views/img/titulo.jpg" alt="Nombre de la guarderia">
    <div class="form-group">
        <h1>FORMALIZACIÓN MATRÍCULA</h1>
        <p>Por favor, rellene a continuación el formulario para inscribir al niño o a la niña.</p>
        <p> [Los campos marcados con <span class="rojo">*</span> son obligatorios] </p>
    </div>

    <form action="" id="registroForm" onsubmit="return validarForm()">
        <div id="datosNino">
        <h2>Datos del/la niño/a</h2>
        <p>
            <label for="nombreN"> NOMBRE: <span class="rojo">*</span></label>
            <input type="text" id="nombreN" name="nombreN">
        </p>
        <div class="errorNombre rojo msn"></div>
        <p>
            <label for="apellidosN">APELLIDOS: <span class="rojo">*</span></label>
            <input type="text" id="apellidosN" name="apellidosN">
        </p>
        <div class="errorApellidos rojo msn"></div>
        <p>
            <label for="fNacimientoN">FECHA DE NACIMIENTO: <span class="rojo">*</span></label>
            <input type="date" id="fNacimientoN" name="fNacimientoN">
        </p>
        <div class="errorFnacimientoN rojo msn"></div>
        <p>
            <label for="direccionN">DIRECCIÓN <span class="rojo">*</span></label>
            <input type="text" id="direccionN" name="direccionN">
        </p>
        <div class="errorDirecN rojo msn"></div>
        <table>
            <tr>
                <td>
                    <label for="poblacionN">POBLACIÓN <span class="rojo">*</span></label>
                     <select id="poblacionN" name="poblacionN">
                        <option value=""></option>
                         <option value="tomelloso">TOMELLOSO</option>
                        <option value="argamasilla">ARGAMASILLA DE ALBA</option>
                        <option value="socuellamos">SOCUÉLLAMOS</option>
                        <option value="pedroM">PEDRO MUÑOZ</option>
                        <option value="arenalesSg">ARENALES DE SAN GREGORIO</option>
                     </select>
                    <div class="errorPoblacionN rojo msn"></div>
                </td>
                <td>
                    <label for="codigoPostN">C.P.: <span class="rojo">*</span></label>
                    <input type="number" id="codigoPostN" name="codigoPostN">
                    <div class="errorCodigoPn rojo msn"></div>
                </td>
            </tr>
        </table>
        </div>
        <div id="datosFamilia" class="container col-12">
            <h2>Datos familiares</h2>
                <h3>PADRE/TUTOR 1</h3>
                <p>
                    <label for="nombreYapellidosPoT1">NOMBRE Y APELLIDOS <span class="rojo">*</span></label>
                    <input type="text" id="nombreYapellidosPoT1" name="nombreYapellidosPoT1">
                 </p>
                 <div class="errorNombrePoT rojo msn"></div>
                <table>
                    <tr>
                        <td>
                            <label for="dniPoT1">DNI: <span class="rojo">*</span></label>
                            <input type="text" id="dniPoT1" name="dniPoT1">
                            <div class="errorDniPoT1 rojo msn"></div>
                         </td>
                        <td>
                            <label for="profesionPoT1">PROFESIÓN <span class="rojo">*</span></label>
                            <input type="text" id="profesionPoT1" name="profesionPoT1">
                            <div class="errorProfPoT1 rojo msn"></div>
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td>
                            <label for="tlfPoT1">TELÉFONO: <span class="rojo">*</span></label>
                            <input type="text" id="tlfPoT1" name="tlfPoT1">
                            <div class="errorTlfPoT1 rojo msn"></div>
                        </td>
                        <td>
                            <label for="emailPoT1">E-mail: <span class="rojo">*</span></label>
                            <input type="email" id="emailPoT1" name="emailPoT1">
                            <div class="errorMailPoT1 rojo msn"></div>
                        </td>
                    </tr>
                </table>
                    <h3>MADRE/TUTOR 2</h3>
                    <p>
                        <label for="nombreYapellidosMoT2">NOMBRE Y APELLIDOS: </label>
                        <input type="text" id="nombreYapellidosMoT2" name="nombreYapellidoMoT2">
                    </p>
                    <table>
                        <tr>
                            <td>
                                <label for="dniMoT2">DNI: </label>
                                <input type="text" id="dniMoT2" name="dniMoT2">

                            </td>
                            <td>
                                <label for="profesionMoT2">PROFESIÓN </label>
                                <input type="text" id="profesionMoT2" name="profesionMoT2">

                            </td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <td>
                                <label for="tlfMoT2">TELÉFONO </label>
                                <input type="tel" id="tlfMoT2" name="tlfMoT2"
                                       placeholder="000 00 00 00"
                                       pattern="[0-9]{3} [0-9]{2} [0-9]{3}">
                            </td>
                            <td>
                                <label for="emailMoT2">E-mail: </label>
                                <input type="email" id="emailMoT2" name="emailMoT2">
                            </td>
                        </tr>
                    </table>
            </div>
            <div id="otrosDatos" class="container col-12">
                <h2>Otros datos de interés</h2>
                <p>
                    <label for="alergias">ALERGIAS: </label>
                    <input type="text" id="alergias" name="alergias">
                </p>
                <p>
                    <label for="alergiasAlim">ALERGIAS ALIMENTARIAS: </label>
                    <input type="text" id="alergiasAlim" name="alergiasAlim">
                </p>
                <p>
                    <label for="intolerancias">INTOLERANCIAS: </label>
                    <input type="text" id="intolerancias" name="intolerancias">
                </p>
                <p>
                    <label for="medicacion">MEDICACIÓN: </label>
                    <input type="text" id="medicacion" name="medicacion">
                </p>
            </div>
        <div id="autorizacionesContainer">
            <h2>Autorizaciones</h2>
            <div id="autorizaciones">
                <!-- Aquí se agregarán dinámicamente las autorizaciones -->
            </div>
            <button type="button" class="boton" onclick="agregarAutorizacion()">Añadir autorización</button>
        </div>
            <p>
                <input type="submit" value="Enviar" class="boton izquierda">
                <input type="reset" id="reset" value="Borrar" class="boton derecha">
            </p>
        <p class="error"></p>
    </form>
</div>
</body>
</html>
