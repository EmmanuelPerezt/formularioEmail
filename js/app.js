//variables
const btnEnviar= document.querySelector('#enviar')
const btnEliminar= document.querySelector('#resetBtn')
const formulario= document.querySelector('#enviar-mail')
//varibles para campos
const campoEmail= document.querySelector('#email')
const campoAsunto= document.querySelector('#asunto')
const campoMensaje= document.querySelector('#mensaje')

eventListeners();
function eventListeners(){
     document.addEventListener('DOMContentLoaded',iniciarApp);
     campoEmail.addEventListener('blur',validarFormulario)
     campoAsunto.addEventListener('blur',validarFormulario)
     campoMensaje.addEventListener('blur',validarFormulario)
     btnEliminar.addEventListener('click',formatearFormulario)

}

//funciones

function iniciarApp(){
    btnEnviar.disabled=true;
}
function validarFormulario(e){
    //valida que no este vacio
    if(e.target.value.length >0){
        e.target.classList.remove('border', 'border-red-500')
        const error= document.querySelector('.error')
        if(error){
        formulario.removeChild(error) }  
    }else{
        e.target.classList.add('border', 'border-red-500')
        //funcion que muestra error
        mostrarError('todos los campos son obligatorios')
    }
    if (e.target.type==='email'){
        const resultado= e.target.value.indexOf('@')
        if (resultado < 0){
            mostrarError('ese no es email')
        }
    }
    //poner boton disponible
    if(campoEmail.value.length >0 && campoAsunto.value.length >0 && campoMensaje.value.length >0){
        btnEnviar.disabled= false;
        btnEnviar.classList.remove('cursor-not-allowed','opacity-50')
    }else{
        btnEnviar.classList.add('cursor-not-allowed','opacity-50')

    }
}
function mostrarError(mensaje){
    const mensajeError= document.createElement('p')
    mensajeError.innerText=mensaje
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error')
    const errores= document.querySelectorAll('.error')
    if (errores.length===0){

    formulario.appendChild(mensajeError)}
}
function formatearFormulario(e){
    e.preventDefault()
    campoEmail.value=""
    campoAsunto.value=""
    campoMensaje.value=""
}