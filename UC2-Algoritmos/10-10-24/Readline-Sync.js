const readline = require('readline-sync')

let nome = readline.question('Qual o seu nome? ')
let sobrenome = readline.question('Qual o seu sobrenome? ')

console.log(`Olá, ${nome} ${sobrenome}. Tudo bem com você?`)
