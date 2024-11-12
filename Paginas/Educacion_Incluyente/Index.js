        //Educacion Incluyente -- "Carrusel de imagenes, (Reconocimientos al modelo)"
let indice = 0;
function moverCarrusel(direccion) {
    const imagenes = document.querySelectorAll('.carrusel .imagenes img');
    indice += direccion;
    if (indice < 0) {
        indice = imagenes.length - 1;
    } else if (indice >= imagenes.length) {
        indice = 0;
    }
    imagenes.forEach((img, i) => {
        img.style.display = i === indice ? 'block' : 'none';
    });
}

// Mostrar la primera imagen al cargar la página
document.addEventListener("DOMContentLoaded", () => moverCarrusel(0));

        // Inclusion Laboral -- "Apoyos para la inclusión laboral"
function showText(sectionId) {
    // Oculta todas las secciones
    document.querySelectorAll('.content-section').forEach(function(section) {
        section.style.display = 'none';
    });
    // Muestra la sección seleccionada
    document.getElementById(sectionId).style.display = 'block';
}

// Capacitacion Incluyente

function showService(serviceId) {
    // Oculta todas las secciones
    document.querySelectorAll('.service-section').forEach(function(section) {
        section.style.display = 'none';
    });
    // Muestra la sección seleccionada
    document.getElementById(serviceId).style.display = 'block';
}