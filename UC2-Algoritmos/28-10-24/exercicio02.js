const readline = require('readline-sync')

const listaDeRacas = ['Pastor Alemão', 'Dachshund', 'Husky', 'Buldogue', 'Pinscher']

let escolheNumero = readline.questionInt(`
1 - Pastor Alemao
2 - Dachshund
3 - Husky
4 - Buldogue
5 - Pinscher
Escolha um numero de 1 a 5: `)

console.log(listaDeRacas[escolheNumero-1])


