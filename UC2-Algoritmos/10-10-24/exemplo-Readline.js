const readline = require('readline-sync')

let time = readline.question('Qual seu time? ')
console.log(time.toUpperCase()) //Transforma a string em Maiúscula
console.log(time.toLowerCase()) //Transforma a string em Minúscula

if (time.toUpperCase() === "GREMIO") {
    console.log('Maior do Sul.')
} else if (time.toLowerCase() === "inter") {
    console.log('Quem?')
} else if (time.toUpperCase() === "JUVENTUDE") {
    console.log('Segundo maior do Sul.')
} else if (time.toLocaleUpperCase() === "CORINTHIANS") {
    console.log('Rebaixado')
} else {
    console.log('Time Não conhecido')
}