var cartaPaulo = {
    nome: "Seiya de pegaso",
    img: "http://2.bp.blogspot.com/-G16mpres2qY/UkI3ipzrRUI/AAAAAAAAE-I/7O9j4-xvOAQ/s1600/Seiyapegaso.jpg",
    atributos: {
        ataque: 80,
        defesa: 65,
        magia: 90
    }
}
var cartaRafa = {
    nome: "Bulbasaur",
    img: "https://img.17qq.com/images/gwkwkqwwy.jpeg",
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 85
    }
}
var cartaGui = {
    nome: "Lord Darth Vader",
    img: "https://www.nerdsite.com.br/wp-content/uploads/2020/01/darth.jpg.webp",
    atributos: {
        ataque: 88,
        defesa: 65,
        magia: 90

    }
}
var cartaMaquina
var cartaJogador
var cartas = [cartaPaulo, cartaRafa, cartaGui]

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaJogador == numeroCartaMaquina) {
        var numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador);

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    exibirOpcoes()
}

function exibirOpcoes() {
    var opcoes = document.getElementById('opcoes')
    var opcoesTexto = ""
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
    }
    console.log(opcoesTexto);
    opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (let i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var atributSelecionado = obtemAtributoSelecionado()
    console.log(atributSelecionado);
    if (cartaJogador.atributos[atributSelecionado] > cartaMaquina.atributos[atributSelecionado]) {
        console.log("Venceu");
    } else if (cartaJogador.atributos[atributSelecionado] < cartaMaquina.atributos[atributSelecionado]) {
        console.log("perdeu");
    } else {
        console.log("Empate");
    }
}