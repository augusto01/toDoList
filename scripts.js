document.addEventListener('DOMContentLoaded', function() {
    // BOTONES 
    let btn_addhomework = document.querySelector('.boton-agregar');
    let btn_editar = document.querySelector('.boton-editar');
    let btn_remover = document.querySelector('.boton-remover');

    // INPUTS 
    let inp_item_input = document.querySelector('.item-input');
    let inp_agregar_tarea = document.querySelector('.input');

    /** BOTON AGREGAR TAREA  */
    btn_addhomework.addEventListener('click', function() {
        inp_item_input.disabled = false;
        inp_item_input.value = inp_agregar_tarea.value; // Usamos .value en lugar de .textContent para obtener el valor del input
    });

    /** BOTON EDITAR TAREA  */
    btn_editar.addEventListener('click', function() {
        console.log('¡Ey, me has hecho clic en Editar!');
    });

    /** BOTON REMOVER TAREA  */
    btn_remover.addEventListener('click', function() {
        console.log('¡Ey, me has hecho clic en Remover!');
    });
});
