const readline = require('readline-sync')

let numero = Number(readline.question('Digite um numero: '))

switch (numero) {
    case 1:
        console.log('Você escolheu o Charmander')
        break;
    case 2:
        console.log('Você escolheu o Squirtle')
        break;
    case 3:
        console.log('Você escolheu o Bulbasaur')
        break;
    default:
        console.log('Pegue o Pikachu então.')
        break;
}