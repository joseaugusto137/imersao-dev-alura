var carta1 = {
    nome: "Naruto",
    imagem: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.625/c_scale,w_400/ncom/en_US/games/switch/n/naruto-shippuden-ultimate-ninja-storm-3-full-burst-switch/description-image",
    atributos: {
        ataque: 10,
        defesa: 9,
        luta: 6
    }
}

var carta2 = {
    nome: "Goku",
    imagem: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2022/05/dragon-ball-super-1200x900-1.jpg",
    atributos: {
        ataque: 10,
        defesa: 8,
        luta: 8
    }
}

var carta3 = {
    nome: "Batman",
    imagem:"https://img.ibxk.com.br/2022/09/16/batman-16150040893043.jpg",
    atributos: {
        ataque: 6,
        defesa: 8,
        luta: 10
    }
}

var cartas = [carta1, carta2, carta3]
var cartaJogador 
var cartaMaquina


function sortearCarta(){
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]
    
    
    var numeroCartaJogador = parseInt(Math.random() * 3)
    cartaJogador = cartas [numeroCartaJogador]

    while(numeroCartaMaquina == numeroCartaJogador){
        numeroCartaJogador =  parseInt(Math.random() * 3)
    }

    cartaJogador = cartas[numeroCartaJogador]
    console.log (cartaJogador)

   
   

    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false

   
   exibirCartaJogador()
}

function exibirOpcoes(){
    var opcoes = document.getElementById("opcoes")

    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
    }
    
    opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado(){
    var radioAtributos = document.getElementsByName("atributo")

    for(var i=0; i < radioAtributos.length; i++){
        if(radioAtributos[i].checked == true){
            return radioAtributos[i].value
        }
    }


}

function jogar(){


    var atributoSelecionado = obtemAtributoSelecionado()

    var divResultado = document.getElementById("resultado")

    var jogadorCarta = cartaJogador.atributos[atributoSelecionado]

    var maquinaCarta =  cartaMaquina.atributos[atributoSelecionado]


    if( jogadorCarta >  maquinaCarta){
         HTMLResultado = "<p class='resultado-final'> Você Venceu!!! </p>"
    }else if ( jogadorCarta <  maquinaCarta){
        HTMLResultado = "<p class='resultado-final'> Você Perdeu, a carta da máquina é maior. </p>"
    } else{
        HTMLResultado = "<p class='resultado-final'> Empatou </p>"
    }
    divResultado.innerHTML = HTMLResultado

    document.getElementById('btnJogar').disabled = true
    
    exibirCartaMaquina()
}

function exibirCartaJogador(){
    var divCartaJogador = document.getElementById('carta-jogador')

    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"style=" width: inherit; height: inherit; position: absolute;">'

    var tagHTML = "<div id='opcoes' class='carta-status'>"
        
        var opcoesTexto = ""

        for (var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var nome = `<p class="carta-subtitle"> ${cartaJogador.nome}</p>`

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"

}

function exibirCartaMaquina(){
    var divCartaMaquina = document.getElementById('carta-maquina')

    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"style=" width: inherit; height: inherit; position: absolute;">'

    var tagHTML = "<div id='opcoes' class='carta-status'>"
        
        var opcoesTexto = ""

        for (var atributo in cartaMaquina.atributos){
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>"
    }

    var nome = `<p class="carta-subtitle"> ${cartaMaquina.nome}</p>`

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}