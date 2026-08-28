console.log("JavaScript conectado correctamente");

// Elementos del DOM
const botonInfo = document.getElementById("botonInfo");
const informacionExtra = document.getElementById("informacionExtra");

// Evento click
botonInfo.addEventListener("click", function () {

    if (informacionExtra.style.display === "none") {
        informacionExtra.style.display = "block";
        botonInfo.textContent = "Ocultar información";
    } else {
        informacionExtra.style.display = "none";
        botonInfo.textContent = "Mostrar más información";
    }

});

// Formulario de contacto
const formulario = document.querySelector(".formulario-contacto");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || correo === "" || mensaje === "") {
        alert("Por favor, completa todos los campos.");
    } else {
        alert("Mensaje enviado correctamente.");
        formulario.reset();
    }
});