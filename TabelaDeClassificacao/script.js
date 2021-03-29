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
