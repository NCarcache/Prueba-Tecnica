const form = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('correo');
const contra = document.getElementById('pwd');
const comentario = document.getElementById('comentario');

const minusculas = /[a-z]/g;
const mayusculas = /[A-Z]/g;
const numeros = /[0-9]/g;

function validacionNombre(nombre){
    if (nombre === "" || nombre===null)
    {
       alert("Nombre es un campo obligatorio, no debe estar vacío")
    }
}

function validacionApellido(apellido){
    if (apellido === "" || apellido===null)
    {
       alert("Apellido es un campo obligatorio, no debe estar vacío")
    }
} 

function validacionCorreo(correo){
    const formatoCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (correo === "" || correo===null)
    {
       alert("Correo es un campo obligatorio, no debe estar vacío")
    }else if(!correo.match(formatoCorreo)){
        alert("Por favor ingrese un correo válido")
    }
} 

function validacionPwd(contra){
    if ( !contra.match(minusculas) || !contra.match(mayusculas) || !contra.match(numeros) || contra.length < 6 )
    {
       alert("La contraseña debe contener al menos: \n -6 caracteres \n -Una letra mayúscula \n -Una letra minúscula \n -Un dígito")
    }
} 

function validacionComentario(comentario){
    if (comentario.length > 50)
    {
       alert("El comentario no puede ser mayor a 50 caracteres")
    }
} 

nombre.addEventListener('focusout', function(e){
    validacionNombre(nombre.value);
});

apellido.addEventListener('focusout', function(e){
    validacionApellido(apellido.value);
});

correo.addEventListener('focusout', function(e){
    validacionCorreo(correo.value);
});

contra.addEventListener('focusout', function(e){
    validacionPwd(contra.value);
});

comentario.addEventListener('focusout', function(e){
    validacionComentario(comentario.value);
});

form.addEventListener('submit', function(e){
    e.preventDefault();

    validacionNombre(nombre.value);
    validacionApellido(apellido.value);
    validacionCorreo(correo.value);
    validacionPwd(contra.value);
    validacionComentario(comentario.value);
    

})

