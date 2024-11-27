const readline = require('readline-sync')

const laboratorio = [
    {nome: 'Swellow', tipo: 'Voador/Normal', nivel: 52},
    {nome: 'Hydreigon', tipo: 'Dragão/Noturno', nivel: 65},
    {nome: 'Heracross', tipo: 'Inseto/Lutador', nivel: 52},
    {nome: 'Snorlax', tipo: 'Normal', nivel: 50},
    {nome: 'Umbreon', tipo: 'Noturno', nivel: 51},
    {nome: 'Electvire', tipo: 'Elétrico', nivel: 54},
    {nome: 'Floatzle', tipo: 'Água', nivel: 50},
    {nome: 'Torkoal', tipo: 'Fogo', nivel: 42}
]

const pokesJornada = [
    {nome: 'Sceptile', tipo: 'Grama', nivel: 55}
]

function mochila() {
    for (let i = 0; i < pokesJornada.length; i++) {
        ind = i
        console.log(`${ind+1} - ${pokesJornada[i].nome} - Tipo: ${pokesJornada[i].tipo} - Nível: ${pokesJornada[i].nivel}.`)
    }

}

function guardarPoke() {
    for (let i = 0; i < pokesJornada.length; i++) {
        ind = i
        console.log(`${ind+1} - ${pokesJornada[i].nome} - Tipo: ${pokesJornada[i].tipo} - Nível: ${pokesJornada[i].nivel}.`)
    }
    let guardarPoke = readline.questionInt('Escolha um deles para guardar no Laboratorio: ')
    laboratorio.push(pokesJornada[guardarPoke-1])
    pokesJornada.splice(guardarPoke-1, 1)

}

function computador() {
    for (let i = 0; i < laboratorio.length; i++) {
       ind = i
           console.log(`${ind+1} - ${laboratorio[i].nome} - Tipo: ${laboratorio[i].tipo}.`)
       }
}
function resgatar() {
     for (let i = 0; i < laboratorio.length; i++) {
        ind = i
            console.log(`${ind+1} - ${laboratorio[i].nome} - Tipo: ${laboratorio[i].tipo}.`)
        }
        let resgatarPoke = readline.questionInt('Escolha um deles para adicionar a sua Equipe: ')
        let pokeResgatado = laboratorio[resgatarPoke-1]
        pokesJornada.push(pokeResgatado)
        laboratorio.splice(resgatarPoke-1, 1)
}

// function resgatar() {
//     let opcao 
//     let condicao = true
//     while (condicao) {
//         opcao = readline.questionInt(`
//         1 - Normal.
//         2 - Fogo.
//         3 - Agua.
//         4 - Grama.
//         5 - Dragao.
//         Escolha uma opcao: 
//         `)
//     }
//     for (let i = 0; i < laboratorio.length; i++) {
//        ind = i
//            console.log(`${ind+1} - ${laboratorio[i].nome} - Tipo: ${laboratorio[i].tipo}.`)
//        }
//        let resgatarPoke = readline.questionInt('Escolha um deles para adicionar a sua Equipe: ')
//        let pokeResgatado = laboratorio[resgatarPoke-1]
//        pokesJornada.push(pokeResgatado)
//        laboratorio.splice(resgatarPoke-1, 1)
// }


function exibirMenu() {
    let opcao 
    let condicao = true
    while (condicao) {
        opcao = readline.questionInt(`
        1 - Mostrar Mochila.
        2 - Mostrar Laboratorio.
        3 - Resgatar Pokemon.
        4 - Guardar Pokemon.
        5 - Fechar.
        Escolha uma opcao: 
        `)

        switch (opcao) {
            case 1:
                mochila()
                break;
            case 2:
                if (pokesJornada.length<6) {
                    computador() } else {
                    console.log('Você não pode carregar mais de 6 pokémons de uma vez só!')
                }            
                break;
            case 3:
                resgatar()
                break;
            case 4:
                guardarPoke();
                break;
            case 5:
                console.log('Saindo...')
                condicao = false
                break;
                //return; // Return  encerra a função
            default:
                console.log('Opção inválida!')
                break;
        }
    }
}

exibirMenu()