var cartaPaulo = {
    nome: "Seiya de pegaso",
    ataque: 80,
    defesa: 60,
    magia: 90
}
var cartaRafa = {
    nome: "Bulbasaur",
    ataque: 70,
    defesa: 65,
    magia: 85
}
var cartaGui = {
    nome: "Lord Darth Vader",
    ataque: 88,
    defesa: 62,
    magia: 90
}
var cartaMaquina
var cartaJogador
var cartas = [cartaPaulo, cartaRafa, cartaGui]

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]
    console.log(cartaMaquina);
    
    var numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaJogador == numeroCartaMaquina) {
        var numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador);
}