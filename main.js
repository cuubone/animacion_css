
let button = document.querySelector(".manuel");
const divanim = document.querySelector(".anim_1");

button.addEventListener("click", function() {
    // quitar animación (para reiniciarla)
    divanim.style.animation = "none";

    // forzar un reflow (obliga al navegador a actualizar el estilo)
    void divanim.offsetWidth;

    // aplicar animación una vez (sin repetir)
    divanim.style.animation = "myAnimation 4s ease-in 1";
});
