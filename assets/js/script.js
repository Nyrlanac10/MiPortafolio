function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' }); // Desplazar suavemente a la sección
    }
}

document.getElementById('iniciobutton').addEventListener('click', function(){
    scrollToSection('inicio');
});

document.getElementById('sobremibutton').addEventListener('click', function(){
    scrollToSection('sobremi1');
});

document.getElementById('proyectosbutton').addEventListener('click', function(){
    scrollToSection('proyectos2');
});

document.getElementById('contactobutton').addEventListener('click', function(){
    scrollToSection('contacto3');
});