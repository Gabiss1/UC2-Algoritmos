const readline = require('readline-sync')

const laboratorio = [
    {nome: 'Swellow', tipo: ['Voador','Normal'], nivel: 54, geracao: 3},
    {nome: 'Hydreigon', tipo: ['Dragão','Noturno'], nivel: 65, geracao: 5},
    {nome: 'Heracross', tipo: ['Inseto','Lutador'], nivel: 52, geracao: 2},
    {nome: 'Snorlax', tipo: ['Normal'], nivel: 50, geracao: 1},
    {nome: 'Umbreon', tipo: ['Noturno'], nivel: 51, geracao: 2},
    {nome: 'Electvire', tipo: ['Elétrico'], nivel: 54, geracao: 4},
    {nome: 'Floatzle', tipo: ['Água'], nivel: 50, geracao: 4},
    {nome: 'Torkoal', tipo: ['Fogo'], nivel: 42, geracao: 3},
    {nome: 'Weavile', tipo: ['Gelo','Noturno'], nivel: 53, geracao: 4},
    {nome: 'Salamence', tipo: ['Dragão','Voador'], nivel: 58, geracao: 3},
    {nome: 'Dragapult', tipo: ['Dragão','Fantasma'], nivel: 60, geracao: 8},
    {nome: 'Jolteon', tipo: ['Elétrico'], nivel: 50, geracao: 1},
    {nome: 'Blastoise', tipo: ['Água'], nivel: 54, geracao: 1},
    {nome: 'Mantine', tipo: ['Água','Voador'], nivel: 50, geracao: 2},
    {nome: 'Slaking', tipo: ['Normal'], nivel: 58, geracao: 3},
    {nome: 'Krokodile', tipo: ['Noturno','Terra'], nivel: 53, geracao: 5},
    {nome: 'Blaziken', tipo: ['Fogo','Lutador'], nivel: 54, geracao: 3},
    {nome: 'Scizor', tipo: ['Inseto','Metal'], nivel: 51, geracao: 2},
    {nome: 'Garchomp', tipo: ['Dragão','Terra'], nivel: 57, geracao: 4},
    {nome: 'Eevee', tipo: ['Normal'], nivel: 45, geracao: 1},
    {nome: 'Raichu', tipo: ['Elétrico'], nivel: 44, geracao: 1},
    {nome: 'Toxapex', tipo: ['Água','Venenoso'], nivel: 53, geracao: 7}
]

const pokesJornada = [
    {nome: 'Sceptile', tipo: ['Grama'], nivel: 62, geracao: 3}
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
    if (guardarPoke>pokesJornada.length) {
        console.log('Opção Inválida')
        return
    }
    laboratorio.push(pokesJornada[guardarPoke-1])
    pokesJornada.splice(guardarPoke-1, 1)

}

function computador() {
    for (let i = 0; i < laboratorio.length; i++) {
       ind = i
           console.log(`${ind+1} - ${laboratorio[i].nome} - Tipo: ${laboratorio[i].tipo}.`)
       }
}
// function resgatar() {
//      for (let i = 0; i < laboratorio.length; i++) {
//         ind = i
//             console.log(`${ind+1} - ${laboratorio[i].nome} - Tipo: ${laboratorio[i].tipo}.`)
//         }
//         let resgatarPoke = readline.questionInt('Escolha um deles para adicionar a sua Equipe: ')
//         let pokeResgatado = laboratorio[resgatarPoke-1]
//         pokesJornada.push(pokeResgatado)
//         laboratorio.splice(resgatarPoke-1, 1)
// }

function resgatar() {
    let geracao = readline.questionInt(`
        1 - Kanto.
        2 - Johto.
        3 - Hoenn.
        4 - Sinnoh.
        5 - Unova.
        6 - Kalos.
        7 - Alola.
        8 - Galar.
        Escolha uma opcao: 
        `)
    let tipo = readline.questionInt(`
        1 - Normal.
        2 - Fogo.
        3 - Agua.
        4 - Grama.
        5 - Dragao.
        6 - Eletrico.
        7 - Noturno.
        8 - Inseto.
        9 - Voador.
        Escolha o tipo de Pokemon que voce procura: 
        `)
        switch (tipo) {
            case 1:
                tipo = 'Normal'
                break;
            case 2:
                tipo = 'Fogo'
                break;
            case 3:
                tipo = 'Água'
                break;
            case 4:
                tipo = 'Grama'
                break;
            case 5:
                tipo = 'Dragão'
                break;
            case 6:
                tipo = 'Elétrico'
                break;
            case 7:
                tipo = 'Noturno'
                break;
            case 8:
                tipo = 'Inseto'
                break;
            case 9:
                tipo = 'Voador'
                break;
            default:
                console.log('Opção inválida!')
                break;
        }

    let filtro = []

    for (let i = 0; i < laboratorio.length; i++) {
        if (laboratorio[i].tipo[0] === tipo && laboratorio[i].geracao === geracao) {
            filtro.push(laboratorio[i])
            ind = filtro.length
           console.log(`${ind} - ${laboratorio[i].nome}`)
           laboratorio.splice(i, 1)
        } else if (laboratorio[i].tipo[1] === tipo && laboratorio[i].geracao === geracao) {
            filtro.push(laboratorio[i])
                ind = filtro.length
               console.log(`${ind} - ${laboratorio[i].nome}`)
               laboratorio.splice(i, 1)
           }
       } 
       if (filtro.length===0) {
        console.log('Não há nenhum pokémon disponível com esse tipo nessa região!')
        return
       }
       resgatarPoke = readline.questionInt('Escolha um deles para adicionar a sua Equipe: ')
       if (resgatarPoke>filtro.length) {
        console.log('Opção Inválida!')
        return
       }
       let pokeResgatado = filtro[resgatarPoke-1]
       pokesJornada.push(pokeResgatado)
       filtro.splice(resgatarPoke-1, 1)
       laboratorio.push(filtro[0])
       console.log(`${pokeResgatado.nome} foi adicionado ao seu time!`)
}


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