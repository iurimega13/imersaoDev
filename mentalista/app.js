var numSecreto = parseInt(Math.random() * 10)

var tentativa = 3

while (tentativa  > 0){
  var chute = parseInt(prompt("Digite um número entre 0 e 10:"))
  
  if (numSecreto == chute){
   alert('Acertou!!!!')
    break
  }else if (chute > numSecreto){
  alert('O numero certo é menor!!!!')
  tentativa -=1
  }else if (chute < numSecreto){
  alert('O numero certo é maior!!!!')
  tentativa -=1
  }
}
if (tentativa == 0 ){
  alert('Errou!!!! o número secreto era: ' + numSecreto)
}