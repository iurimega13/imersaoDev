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
var cartas = [cartaPaulo, cartaRafa, cartaGui]
var cartaMaquina
var cartaJogador

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

    exibirCartaJogador()
    exibirCartaMaquina()
    //exibirOpcoes()
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById('carta-jogador')
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.img})`
    var nomeCarta = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + ": " + cartaJogador.atributos[atributo] + "\n"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nomeCarta + html + opcoesTexto + '</div>'
}
function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById('carta-maquina')
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.img})`
    var nomeCarta = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    divCartaMaquina.innerHTML = moldura + nomeCarta
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