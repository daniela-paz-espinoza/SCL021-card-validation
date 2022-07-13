import validator from './validator.js';

//console.log(validator);

let inputAdd = document.getElementById("inputNumero");
//console.log(inputAdd, "numero recibido de tarjeta" );


document.getElementById("btn").addEventListener("click", () => {
  let valorInput = validator.isValid(inputAdd.value);
  //console.log(valorInput);// arroja verdadero o falso.

  let maskify = validator.maskify(inputAdd.value);
  //console.log(maskify3);// muestra la mascara
  
   document.getElementById("inputRespuesta").value = maskify;

   if(valorInput === true){
     document.getElementById("mensajeValido").innerHTML="Tarjeta de Credito Valida"
   }else{
    document.getElementById("mensajeValido").innerHTML="Tarjeta de Credito Invalida"
   }
});

// cierra el 1° document
// funcion del imput del formulario

document.getElementById("validarInformacion").addEventListener("click", () => { vaResultado() });

//Da la funcionalidad a la interfaz
function vaResultado() {
  document.getElementById("primera").style.display = "none"
  document.getElementById("segunda").style.display = "block"
}

document.getElementById("respuesta").addEventListener("click", () => { vaResultado2() });

//Da la funcionalidad a la interfaz, prueba de retorno a la pagina principal
function vaResultado2() {
  document.getElementById("segunda").style.display = "none"
  document.getElementById("primera").style.display = "block"

}