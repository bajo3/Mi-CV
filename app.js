// Agregar interacción a las secciones
var sections = document.querySelectorAll('section');
sections.forEach(function(section) {
    section.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

AOS.init();
