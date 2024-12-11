const rl = require('readline-sync')

const doadores = []

function cadastro() {
    const nome = rl.question('Digite seu Nome Completo: ')
    const idade = rl.questionInt('Digite sua Idade: ')
    const peso = rl.questionInt('Digite seu Peso: ')
    const tipoSang = rl.question('Digite seu Tipo Sanguineo (A-, B+, AB+, O-, etc.): ')
//    const dataUltDoacao = rl.question('Digite a data da ultima doacao (dd/mm/aaaa): ')
    const anoDoacao = rl.questionInt('Digite o dia da ultima doacao: ')
    const mesDoacao = rl.questionInt('Digite o mes da ultima doacao: ')
    const diaDoacao = rl.questionInt('Digite o ano da ultima doacao: ')

    const cadastrados = {
        nome: nome,
        idade: idade,
        peso: peso,
        tipoSang: tipoSang.toUpperCase(),
        // dataDoacao: `${anoDoacao}/${mesDoacao}/${diaDoacao}`,
        dataAno: anoDoacao,
        dataMes: mesDoacao,
        dataDia: diaDoacao
    } 
    doadores.push(cadastrados)
    console.log(cadastrados)
}

function listar() {
    for (let i = 0; i < doadores.length; i++) {
        console.log(doadores[i])
    }
}

function buscarSang() {
    const tipoSanguineoBuscado = rl.question('Digite o Tipo sanguineo que voce deseja procurar: ')
    const pesquisa = []
    for (let i = 0; i < doadores.length; i++) {
        if (doadores[i].tipoSang === tipoSanguineoBuscado) {
            pesquisa.push(doadores[i])
        }
    }
    console.log(pesquisa)
}

function buscarData() {
    const anoBuscado = rl.question('Digite o ano buscado: ')
    const mesBuscado = rl.question('Digite o mes buscado: ')
    const diaBuscado = rl.question('Digite o dia buscado: ')

    const pesquisa = []
    for (let i = 0; i < doadores.length; i++) {
        if (doadores[i].anoDoacao <= anoBuscado) {
            pesquisa.push(doadores[i])
        } else if (doadores[i].mesDoacao >= mesBuscado){
            pesquisa.push(doadores[i])
        } else if (doadores[i].diaDoacao >= diaBuscado){
            pesquisa.push(doadores[i])
        }
        console.log(pesquisa)
    }
}

cadastro()
cadastro()
listar()
buscarData()
buscarSang()