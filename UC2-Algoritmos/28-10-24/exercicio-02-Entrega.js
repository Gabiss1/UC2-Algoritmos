const readline = require('readline-sync')

const nomeUsuario = readline.question('Qual o seu nome? ')
const emailUsuario = readline.question('Qual o seu email? ')

console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}!`)