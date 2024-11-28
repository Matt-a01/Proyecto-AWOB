// Mostrar secciones específicas
function toggleSection(sectionId, sectionClass) {
    document.querySelectorAll(`.${sectionClass}`).forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Manejo del carrusel
let currentSlide = 0;
function updateCarousel(direction) {
    const images = document.querySelectorAll('.carrusel img');
    images[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + images.length) % images.length;
    images[currentSlide].classList.add('active');
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
    toggleSection('lector-pantalla', 'service-section');
    updateCarousel(0);
});
