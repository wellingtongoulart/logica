function pulaLinha() {
  document.write('<br>')
}

function mostra(frase) {
  document.write(frase)
  pulaLinha()
}

var numeroPensado = Math.round(Math.random() * 100)
console.log(numeroPensado)

var chute = parseInt(prompt('Digite seu chute!'))

if (chute == numeroPensado) {
  mostra('Você acertou!')
} else {
  mostra('Você errou, o número pensado foi ' + numeroPensado)
}
