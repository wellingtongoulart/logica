var segredo = 2
var input = document.querySelector('input')

function verifica() {
  if (input.value == segredo) {
    alert('Você Acertou')
  } else {
    alert('Você Errou')
  }
}

var button = document.querySelector('button')
button.onclick = verifica
