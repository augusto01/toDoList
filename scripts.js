document.addEventListener('DOMContentLoaded', function() {
    // BOTÓN AGREGAR TAREA
    let btn_addhomework = document.querySelector('.boton-agregar');

    // CONTENEDOR PARA LAS TAREAS
    let container = document.querySelector('.container');

    /** BOTÓN AGREGAR TAREA  */
    btn_addhomework.addEventListener('click', function() {
        // Obtener el texto de la tarea del campo de entrada
        let taskText = document.querySelector('.input').value.trim();

        // Verificar si el campo de tarea está vacío
        if (taskText === '') {
            window.alert('¡Ingresa una tarea válida!');
            return; // Salir de la función si el campo de tarea está vacío
        }

        // Crear elementos HTML para la nueva tarea
        let taskDiv = document.createElement('div');
        taskDiv.classList.add('task-item'); // Agregar la clase 'task-item' al nuevo elemento <div>

        let taskItem = document.createElement('div');
        taskItem.classList.add('item');
        taskItem.textContent = taskText;

        let taskInput = document.createElement('input');
        taskInput.type = 'text';
        taskInput.classList.add('item-input');
        taskInput.disabled = true;

        let btn_editar = document.createElement('button');
        btn_editar.classList.add('boton-editar');
        btn_editar.innerHTML = '<i class="fas fa-lock"></i>';

        let btn_remover = document.createElement('button');
        btn_remover.classList.add('boton-remover');
        btn_remover.innerHTML = '<i class="fas fa-trash-alt"></i>';

        // Agregar los elementos creados al contenedor de tareas
   
        taskDiv.appendChild(taskInput);
        taskDiv.appendChild(btn_editar);
        taskDiv.appendChild(btn_remover);
        container.appendChild(taskDiv);

        // Limpiar el campo de entrada después de agregar la tarea
        document.querySelector('.input').value = '';
    });

    /** BOTON EDITAR TAREA  */
    container.addEventListener('click', function(event) {
        if (event.target.classList.contains('boton-editar')) {
            let taskItem = event.target.parentElement.querySelector('.item');
            let taskInput = event.target.parentElement.querySelector('.item-input');
            taskInput.disabled = false;
            taskInput.focus(); // Poner el foco en el input para editar
            taskItem.style.display = 'none'; // Ocultar el texto de la tarea
        }
    });

    /** BOTON REMOVER TAREA  */
    container.addEventListener('click', function(event) {
        if (event.target.classList.contains('boton-remover')) {
            let taskDiv = event.target.parentElement;
            container.removeChild(taskDiv); // Eliminar la tarea del contenedor
        }
    });
});
