var paulo = {
    nome: "paulo",
    vitorias: 2,
    empates: 5,
    derrotas: 1,
    pontos: 0
}

var rafa = {
    nome: "rafa",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0
}

rafa.pontos = calculaPontos(rafa)

function calculaPontos(jogador) {
    let pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}



var jogadores = [rafa, paulo]


exibirJogadorresNaTela(jogadores)


function exibirJogadorresNaTela(jogadores) {
    var html = ""
    for (let i = 0; i < jogadores.length; i++) {
        html += "<tr><td>" + jogadores[i].nome + "</td>"
        html += "<td>" + jogadores[i].vitorias + "</td>"
        html += "<td>" + jogadores[i].empates + "</td>"
        html += "<td>" + jogadores[i].derrotas + "</td>"
        html += "<td>" + jogadores[i].pontos + "</td>"
        html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    }
    
    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = html
}