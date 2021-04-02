var num1 = parseInt(prompt("Digite o primeiro valor: "))
var operacao = prompt("Qual operação fazer: ")
var num2 = parseInt(prompt("Digite o primeiro valor: "))
if (num1 == NaN){
  alert("Digite valores numericos!!!")
} else if (num2 == NaN){
  alert("Digite valores numericos!!!")
}
var resultado
switch (operacao){
  case "+":
    resultado = num1 + num2
    document.write("<h2>" + num1 + " + " + num2 +" = " +resultado + "</h2>")
    break; 
  case "-":
    resultado = num1 - num2
    document.write("<h2>" + num1 + " - " + num2 +" = " +resultado + "</h2>")
    break;
  case "*":
    resultado = num1 * num2
    document.write("<h2>" + num1 + " x " + num2 +" = " +resultado + "</h2>")
    break;
  case "/":
    resultado = num1 / num2
    document.write("<h2>" + num1 + " / " + num2 +" = " +resultado + "</h2>")
    break;
  default:
    alert(operacao + " não é um operador!!!")
    document.write("<h2> ERROR </h2>")
    break;

}