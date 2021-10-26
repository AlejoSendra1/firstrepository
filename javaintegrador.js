
var numEntradas = document.getElementById("Cantidad");

var resultadoAmostrar = document.getElementById("importeapagar");

document.getElementById("Enviar").addEventListener('click',precioFinal(),true);

function precioFinal(){
 
  var numEntradas = document.getElementById("Cantidad").value; 
  totalEntradas = numEntradas * 200;
  var resultadoCompra = "0"; 
  
  var descuentoValue = document.getElementById("inputState").value;

  if(descuentoValue == 1){
      resultadoCompra = totalEntradas - (totalEntradas * 0.8);
  } else if (descuentoValue == 2){
    resultadoCompra = totalEntradas - (totalEntradas * 0.5);
  }else{
      resultadoCompra = totalEntradas - (totalEntradas * 0.15);
  }
 console.log(resultadoCompra);
 resultadoAmostrar.innerText= "Total a pagar " + resultadoCompra + " $";
}