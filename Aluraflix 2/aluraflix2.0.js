function adicionarFilme(){
 let filmeFavorito = document.getElementById("filme").value

 if(filmeFavorito.endsWith(".jpg")){
    listarFilmesNaTela(filmeFavorito)
 } else{
    console.error("Endereço de filme inválido.")
 }

 document.getElementById("filme").value =""
}

function listarFilmesNaTela(filme){
let elementoFilmeFavorito = "<img src=" +filme + ">"
let listaFilmes = document.getElementById("listaFilmes")
     
listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilmeFavorito
}