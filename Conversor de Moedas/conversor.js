function converterDolar() {
   let valorElemento = document.getElementById('valor')
   let valor = valorElemento.value
   let valorEmDolar = parseFloat(valor)

   let valorEmReal = valorEmDolar / 5
   console.log(valorEmReal)

   let elementoValorConvertido = document.getElementById('valorConvertidoDolar')

   let valorConvertidoDolar = "O resultado em real é R$ " +valorEmReal 

  elementoValorConvertido.innerHTML = valorConvertidoDolar
}

function converterEuro() {
    let valorElemento = document.getElementById('valor')
    let valor = valorElemento.value
    let valorEmEuro = parseFloat(valor)
 
    let valorEmReal = valorEmEuro / 6
    console.log(valorEmReal)
 
    let elementoValorConvertido = document.getElementById('valorConvertidoEuro')
 
    let valorConvertidoEuro = "O resultado em real é R$ " +valorEmReal 
 
   elementoValorConvertido.innerHTML = valorConvertidoEuro
 }