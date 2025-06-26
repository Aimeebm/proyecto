
    // Código para el menú hamburguesa

    document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('hamburguesa');
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay');

    boton.addEventListener('click', () => {
      menu.classList.toggle('activo');
      overlay.classList.toggle('activo');
    });

    overlay.addEventListener('click', () => {
      menu.classList.remove('activo');
      overlay.classList.remove('activo');
    });

    // Cierra el menú al hacer clic en un enlace
    const enlaces = menu.querySelectorAll('a');
    enlaces.forEach(enlace => {
      enlace.addEventListener('click', () => {
        menu.classList.remove('activo');
        overlay.classList.remove('activo');
      });
    });
  });

  

    // Slider

    // Moví el código del slider al index.

