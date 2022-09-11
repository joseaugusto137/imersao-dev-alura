let numeroSecreto = parseInt(Math.random() *11)

function chutar(){
   let chute = parseInt(document.getElementById('valor').value)
   console.log(chute)
    let elementoResultado = document.getElementById('resultado')
   
   
    if(chute > 10 || chute < 0){
    elementoResultado.innerHTML = "Você deve escolher um número de 0 a 10"
   }else if(chute > numeroSecreto){
    elementoResultado.innerHTML = "Que pena. Você errou! O número que você procura é menor que este."
   } else if(chute < numeroSecreto){
    elementoResultado.innerHTML = "Que pena. Você errou! O número que você procura é maior que este."
    }else{
        elementoResultado.innerHTML = "Parabéns! Você acertou!!!"
    }
}
   
