console.log("JavaScript conectado correctamente");

// ================================
// ELEMENTOS DEL DOM
// ================================

const botonInfo = document.getElementById("botonInfo");
const informacionExtra = document.getElementById("informacionExtra");

const formularioContacto = document.getElementById("formularioContacto");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");

const saludoVisitante = document.getElementById("saludoVisitante");


// ================================
// FUNCIÓN 1: MOSTRAR / OCULTAR INFORMACIÓN
// ================================

function mostrarInformacion() {

    if (informacionExtra.style.display === "none") {

        informacionExtra.style.display = "block";
        botonInfo.textContent = "Ocultar información";

    } else {

        informacionExtra.style.display = "none";
        botonInfo.textContent = "Mostrar más información";
    }
}


// ================================
// EVENTO 1: CLICK
// ================================

botonInfo.addEventListener("click", mostrarInformacion);


// ================================
// FUNCIÓN 2: GUARDAR NOMBRE
// ================================

function guardarNombre() {

    localStorage.setItem("nombreVisitante", nombre.value);
}


// ================================
// FUNCIÓN 3: MOSTRAR SALUDO
// ================================

function mostrarSaludo() {

    const nombreGuardado = localStorage.getItem("nombreVisitante");

    if (nombreGuardado) {

        saludoVisitante.textContent =
            "¡Hola de nuevo, " + nombreGuardado + "! Gracias por visitar mi portafolio.";

    }
}


// ================================
// EVENTO 2: SUBMIT DEL FORMULARIO
// ================================

formularioContacto.addEventListener("submit", function (event) {

    event.preventDefault();

    // Validación de campos
    if (
        nombre.value.trim() === "" ||
        correo.value.trim() === "" ||
        mensaje.value.trim() === ""
    ) {

        alert("Por favor, completa todos los campos.");

        return;
    }

    // Guardar nombre en LocalStorage
    guardarNombre();

    // Mostrar confirmación
    alert("Mensaje enviado correctamente.");

    // Limpiar formulario
    formularioContacto.reset();

    // Actualizar saludo
    mostrarSaludo();
});


// ================================
// RECUPERAR DATOS AL CARGAR LA PÁGINA
// ================================

mostrarSaludo();