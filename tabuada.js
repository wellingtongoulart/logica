function pulaLinha() {
  document.write('<br><br>')
}

function mostra(frase) {
  document.write(frase)
  pulaLinha()
}

//uso do for//
var numero = parseInt(prompt('Digite o número que deseja calcular'))
for (var multiplicador = 1; multiplicador <= 10; multiplicador++) {
  mostra(numero * multiplicador)
}

mostra('fim')
