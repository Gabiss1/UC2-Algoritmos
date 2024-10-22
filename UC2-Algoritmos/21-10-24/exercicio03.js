const readline = require('readline-sync')

let numeroTabuada = readline.question('Escolha um numero: ')
let multiplicador = 1

while (multiplicador<=10) {
    console.log(`${numeroTabuada} x ${multiplicador} = ${numeroTabuada*multiplicador}`)
    multiplicador++
}
