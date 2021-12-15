function pulaLinha() {
  document.write('<br>')
}

function mostra(frase) {
  document.write(frase)
  pulaLinha()
}

var numeroPensado = Math.round(Math.random() * 100)
console.log(numeroPensado)
var tentativas = 1

while (tentativas <= 3) {
  var chute = parseInt(prompt('Digite seu chute!'))
  if (chute == numeroPensado) {
    mostra('Você ACERTOU')
    break //ou repete a variavel com um valor acima (tentativas =4)
  } else {
    mostra('Você ERROU')
  }
  tentativas++
}
