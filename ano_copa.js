function pulaLinha() {
  document.write('<br>')
}

function mostra(frase) {
  document.write(frase)
  pulaLinha()
}

var dataLimite = parseInt(prompt('Digite a data que gostaria de saber'))
var anoCopa = 1930

while (anoCopa <= dataLimite) {
  mostra('Teve copa em ' + anoCopa)
  anoCopa = anoCopa + 4
}

mostra('bananinha')
