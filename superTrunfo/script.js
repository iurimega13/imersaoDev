var cartaPaulo = {
    nome: "Seiya de pegaso",
    img: "http://2.bp.blogspot.com/-G16mpres2qY/UkI3ipzrRUI/AAAAAAAAE-I/7O9j4-xvOAQ/s1600/Seiyapegaso.jpg",
    atributos: {
        ataque: 85,
        defesa: 70,
        magia: 90
    }
}

var cartaRafa = {
    nome: "Bulbasaur",
    img: "https://img.17qq.com/images/gwkwkqwwy.jpeg",
    atributos: {
        ataque: 60,
        defesa: 70,
        magia: 80
    }
}

var cartaGui = {
    nome: "Lord Darth Vader",
    img: "https://www.nerdsite.com.br/wp-content/uploads/2020/01/darth.jpg.webp",
    atributos: {
        ataque: 93,
        defesa: 80,
        magia: 89

    }
}

var cartaLol = {
    nome: "Caitlyn",
    img: "http://1.bp.blogspot.com/-K7CbqWc1-p0/VLc98v85s0I/AAAAAAAABqk/-ZB684VVHbg/s1600/Caitlyn_OriginalSkin.jpg",
    atributos: {
        ataque: 95,
        defesa: 40,
        magia: 10
    }
}

var cartaNaruto = {
    nome: "Naruto",
    img: "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_450x337.png",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 100
    }
}

var cartaHarry = {
    nome: "Harry Potter",
    img: "https://sm.ign.com/ign_br/screenshot/default/89ff10dd-aa41-4d17-ae8f-835281ebd3fd_49hp.jpg",
    atributos: {
        ataque: 70,
        defesa: 50,
        magia: 95
    }
}

var cartaBatman = {
    nome: "Batman",
    img: "https://assets.b9.com.br/wp-content/uploads/2020/09/Batman-issue86-heder-1280x677.jpg",
    atributos: {
        ataque: 95,
        defesa: 70,
        magia: 0
    }
}

var cartaMarvel = {
    nome: "Capitã Marvel",
    img: "https://cinepop.com.br/wp-content/uploads/2018/09/capitamarvel21.jpg",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 0
    }
}

var cartas = [cartaPaulo, cartaRafa, cartaGui, cartaLol, cartaNaruto, cartaHarry, cartaBatman, cartaMarvel]
var cartaMaquina
var cartaJogador

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()

function atualizaPlacar() {
    var divPlacar = document.getElementById('placar')
    var html = `Jogador ${pontosJogador} / ${pontosMaquina} Máquina`
    divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 8)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 8)
    while (numeroCartaJogador == numeroCartaMaquina) {
        var numeroCartaJogador = parseInt(Math.random() * 8)
    }

    cartaJogador = cartas[numeroCartaJogador]

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibirCartaJogador()
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById('carta-jogador')
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.img})`
    var nomeCarta = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""
    
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + ": " + cartaJogador.atributos[atributo] + "</br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nomeCarta + html + opcoesTexto + '</div>'
}
function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById('carta-maquina')
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.img})`
    var nomeCarta = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='radio' name='atributo' value='" + atributo + "'>" + atributo + ": " + cartaMaquina.atributos[atributo] + "</br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"
    
    divCartaMaquina.innerHTML = moldura + nomeCarta + html + opcoesTexto + '</div>'
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
    var divResultado = document.getElementById('resultado')
    var atributSelecionado = obtemAtributoSelecionado()
    
    if (cartaJogador.atributos[atributSelecionado] > cartaMaquina.atributos[atributSelecionado]) {
        pontosJogador++
        var htmlResultado = `<p class="resultado-final"> Venceu!!!</p>`
        divResultado.innerHTML = htmlResultado
    } else if (cartaJogador.atributos[atributSelecionado] < cartaMaquina.atributos[atributSelecionado]) {
        pontosMaquina++
        var htmlResultado = `<p class="resultado-final"> Perdeu!!!</p>`
        divResultado.innerHTML = htmlResultado
    } else {
        var htmlResultado = `<p class="resultado-final"> Empate!!!</p>`
        divResultado.innerHTML = htmlResultado
    }
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = false
    exibirCartaMaquina()
    atualizaPlacar()
}