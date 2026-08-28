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