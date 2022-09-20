var jose = {nome: 'José', vitorias:2, empates:1, derrotas:3, pontos:10}
var jessica = {nome: 'Jessica', vitorias:3, empates:2, derrotas:1, pontos:21}

function calculaPontos(jogador){
    let pontos = (jogador.vitorias *3) + jogador.empates
    return pontos
}

jessica.pontos = calculaPontos(jessica)
jose.pontos= calculaPontos(jose)


let jogadores = [jose, jessica]

function exibirJogadoresNaTela(jogadores) {
    let elemento = ""
    for (let i=0; i < jogadores.length; i++){
        elemento += "<tr><td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].vitorias + "</td>"
        elemento += "<td>" + jogadores[i].empates + "</td>"
        elemento += "<td>" + jogadores[i].derrotas + "</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"
        elemento += "<td><button onclick='adicionarVitoria("+ i+")'> Vitória</button></td>"
        elemento += "<td><button onclick='adicionarEmpate("+ i +")'> Empate</button></td>"
        elemento += "<td><button onclick='adicionarDerrota("+ i +")'> Derrota</button></td>"   
        elemento += "</tr>"
    }

    let tabelaJogadores = document.getElementById("tabelaJogadores")
        tabelaJogadores.innerHTML = elemento

}

exibirJogadoresNaTela(jogadores)

function adicionarVitoria(i){
    let jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
    
}

function adicionarEmpate(i){
    let jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
    
}

function adicionarDerrota(i){
    let jogador = jogadores[i]
    jogador.derrotas++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
    
}