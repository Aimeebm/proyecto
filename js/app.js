
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

    window.onload = function () {
    const imagenes = [
      "assets/img/foto1.jpg",
      "assets/img/foto2.jpg",
    ];
    let indice = 0;
    const img = document.getElementById("slide");

    function cambiarImagen() {
      img.style.opacity = 0;

      setTimeout(() => {
        indice = (indice + 1) % imagenes.length;
        img.src = imagenes[indice];
        img.style.opacity = 1;
      }, 1500); // tiempo igual al de la transición
    }

    setTimeout(cambiarImagen, 2000); // primer cambio más pronto
    setInterval(cambiarImagen, 8000); // siguientes cada 8s
  };