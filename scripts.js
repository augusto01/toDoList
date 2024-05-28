document.addEventListener('DOMContentLoaded',function(){


    let btn_addhomework = document.querySelector('.boton-agregar');
    let btn_editar = document.querySelector('.boton-editar');
    let btn_remover = document.querySelector('.boton-remover');

   btn_addhomework.addEventListener('click', function(){
    console.log('EY ME HAS HECHO CLICK !')
   });

   btn_editar.addEventListener('click', function(){
    console.log('EY ME HAS HECHO CLICK 1 !')
   });

   btn_remover.addEventListener('click', function(){
    console.log('EY ME HAS HECHO CLICK 2 !')
   });

})