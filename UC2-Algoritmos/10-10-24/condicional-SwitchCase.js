const readline = require('readline-sync')

let time = readline.question('Qual seu time? ')

switch (time.toUpperCase()) {
    case "GREMIO":
        console.log('O seu time é o melhor!!!')
        break;
    case "INTER":
        console.log('O seu time é o menor!!!')
        break;
    case "JUVENTUDE":
        console.log('Segundo maior do Sul')
        break;
    default:
        console.log('Time não reconhecido.')
        break;
}

/*if (time === "Grêmio") {
    console.log('Maior do Sul.')
} else if (time === "Inter") {
    console.log('Quem?')
} else if (time === "Juventude") {
    console.log('Segundo maior do Sul.')
} else if (time === "Corinthians") {
    console.log('Rebaixado')
} else {
    console.log('Time Não conhecido')
}*/