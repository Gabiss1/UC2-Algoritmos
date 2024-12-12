const rl = require('readline-sync')

const doadores = []

let status = true

function cadastro() {
    const nome = rl.question('Digite seu Nome Completo: ')
    const idade = rl.questionInt('Digite sua Idade: ')
    const peso = rl.questionInt('Digite seu Peso: ')
    const tipoSang = rl.question('Digite seu Tipo Sanguineo (A-, B+, AB+, O-, etc.): ')
    
    // const dataUltDoacao = rl.question('Digite a data da ultima doacao (dd/mm/aaaa): ')

    while(status === true){
        const dataUltDoacao = rl.question('Digite a data da ultima doacao (dd/mm/aaaa): ')
        
        switch (dataUltDoacao.length) {
            case 10:
                console.log('Cadastrado com Sucesso!!!')
                status = false
                const cadastrados = {
                    nome: nome,
                    idade: idade,
                    peso: peso,
                    tipoSang: tipoSang.toUpperCase(),
                    dataDoacao: dataUltDoacao
                    // dataDoacao: `${diaDoacao}/${mesDoacao}/${anoDoacao}`
                } 
                doadores.push(cadastrados)
                console.log(cadastrados)
                break;
            default:
                console.log('Digite a Data no Formato Requerido')
                break;
        }
        }
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
        if (doadores[i].tipoSang === tipoSanguineoBuscado.toUpperCase()) {
            pesquisa.push(doadores[i])
        }
    }
    console.log(pesquisa)
}

function buscarData() {
    const dataBuscada = rl.question('Digite a Data buscado: ')
    const anoBuscado = dataBuscada.slice(6,10)
    const mesBuscado = dataBuscada.slice(3,5)
    const diaBuscado = dataBuscada.slice(0,2)

    const dataBuscadaValor = parseInt(`${anoBuscado+mesBuscado+diaBuscado}`)

    for (let i = 0; i < doadores.length; i++) {
        const ano = doadores[i].dataDoacao.slice(6,10)
    const mes = doadores[i].dataDoacao.slice(3,5)
    const dia = doadores[i].dataDoacao.slice(0,2)
    const dataComparacao = parseInt(`${ano+mes+dia}`)
    if (dataComparacao<=dataBuscadaValor) {
        console.log(doadores[i])
    } else {
        console.log('Erro')
    }
    }
}

// function buscarPorDataUltimaDoacao() {
//     const dataLimite = rl.question("Digite a data limite (dd/mm/aaaa): ");
//     console.log("\n=== RESULTADO DA BUSCA ===");
//     doadores.forEach(doador => {
//         if (doador.dataDoacao === > dataLimite) {
//             console.log(`Nome: ${doador.nome}, Última Doação: ${doador.dataDoacao}`);
//         }
//     });
// }

while(true){
    console.clear()
    console.log(
    `
    =====SISTEMA DE CADASTRO DE DOADORES====
    1 - Cadastrar doador
    2 - Listar Doadores
    3 - Buscar doadores por tipo Sanguineo
    4 - Buscar doadores por ultima doacao
    5 - Sair
    `
    )
    opcao = parseInt(rl.question('Escolha uma opcao: '));
    
    switch (opcao) {
        case 1:
            cadastro()
        break; //teste
        case 2:
            listar()
        break;
        case 3:
            buscarSang()
        break;
        case 4:
            buscarData()
        break;
        case 5:
            console.log('Fim de Programa')
            process.exit(0)
        default:
            console.log('Opcao Invalida')
            break;
    }
    rl.question('Pressione ENTER para continuar...')
    }

