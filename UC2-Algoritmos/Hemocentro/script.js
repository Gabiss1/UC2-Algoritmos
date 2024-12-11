const rl = require('readline-sync')

const doadores = []

function cadastro() {
    const nome = rl.question('Digite seu Nome Completo: ')
    const idade = rl.questionInt('Digite sua Idade: ')
    const peso = rl.questionInt('Digite seu Peso: ')
    const tipoSang = rl.question('Digite seu Tipo Sanguineo (A-, B+, AB+, O-, etc.): ')
    const dataUltDoacao = rl.question('Digite a data da ultima doacao (dd/mm/aaaa): ')
    


    const cadastrados = {
        nome: nome,
        idade: idade,
        peso: peso,
        tipoSang: tipoSang.toUpperCase(),
        dataUltDoacao: new Date (dataUltDoacao)
    } 
    doadores.push(cadastrados)
    
}

function name() {
    
}

cadastro()
console.log(doadores)