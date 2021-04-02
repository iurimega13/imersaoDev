var valorEmDolarStr = prompt("Qual o valor em Dolar?")
var valorEmDolarNum = parseFloat(valorEmDolarStr)
var valorEmReal = valorEmDolarNum * 5.50

alert("Resultado convertido em Real: " + valorEmReal.toFixed(2))