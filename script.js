console.log("JavaScript conectado correctamente");

// Evento click en los enlaces del menú
const enlacesMenu = document.querySelectorAll("header a");

enlacesMenu.forEach(function(enlace) {
    enlace.addEventListener("click", function() {
        console.log("Se hizo clic en: " + enlace.textContent);
    });
});

// Evento mouseover y mouseout en la imagen de perfil
const imagenPerfil = document.querySelector('img[src="img/perfil.png"]');

imagenPerfil.addEventListener("mouseover", function() {
    console.log("Mouse sobre la imagen de perfil");
});

imagenPerfil.addEventListener("mouseout", function() {
    console.log("Mouse fuera de la imagen de perfil");
});