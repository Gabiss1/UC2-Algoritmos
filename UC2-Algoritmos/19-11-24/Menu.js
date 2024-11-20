const readline = require('readline-sync')

function imprimeFrase() {
    console.log('Olá, tudo bem?')
}

function soma() {
    numero = 5
    numero2 = 2

    console.log(numero+numero2)
}

function exibirMenu() {
    let opcao 
    while (true) {
        opcao = readline.questionInt(`
        1 - Mostrar Frase.
        2 - Soma.
        3 - Fechar.
        `)

        switch (opcao) {
            case 1:
                imprimeFrase()
                break;
            case 2:
                soma()
                break;
            case 3:
                console.log('Saindo...')
                return; // Return  encerra a função
            default:
                console.log('Opção inválida!')
                break;
        }
    }
}

exibirMenu()