const rl = require('readline-sync')

const doadores = []

let estado= true

function cadastro() {
    const nome = rl.question('Digite seu Nome Completo: ')
    const idade = rl.questionInt('Digite sua Idade: ')
    const peso = rl.questionInt('Digite seu Peso: ')
    const tipoSang = rl.question('Digite seu Tipo Sanguineo (A-, B+, AB+, O-, etc.): ')
    
    // const dataUltDoacao = rl.question('Digite a data da ultima doacao (dd/mm/aaaa): ')

    while(estado === true){
        const dataUltDoacao = rl.question('Digite a data da ultima doacao (dd/mm/aaaa): ')
        const checagemBarra1 = dataUltDoacao[5]
        const checagemBarra2 = dataUltDoacao[2]
        const valorDia = dataUltDoacao.slice(0,2)
        const valorMes = dataUltDoacao.slice(3,5)
        const valorAno = dataUltDoacao.slice(6,dataUltDoacao.length)
    
        const checagemData = Number(valorDia+valorMes+valorAno)
    
        if (dataUltDoacao.length>=10 && checagemData.toString() !== 'NaN' && checagemBarra1 === '/' && checagemBarra2 === '/') {
            const cadastrados = {
                nome: nome,
                idade: idade,
                peso: peso,
                tipoSang: tipoSang.toUpperCase(),
                dataDoacao: dataUltDoacao
                // dataDoacao: `${diaDoacao}/${mesDoacao}/${anoDoacao}`
            } 
            doadores.push(cadastrados)
            console.log('Doador Cadastrado com Sucesso!')
            estado = false    
        }
        else {
            console.log('Cadastre a Data no Formato Exigido!')
        }
    }
        estado = true
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

    function converterData(data) {
        const ano = data.slice(6,data.length)
        const mes = data.slice(3,5)
        const dia = data.slice(0,2)
        
        const diaConvertido = Number(dia)
        const mesConvertido = Number(mes)
        const anoConvertido = Number(ano)
    
        const dataComparacao = anoConvertido*10000+mesConvertido*100+diaConvertido
    
    
        return dataComparacao
    }

    const dataBuscadaConvertida = converterData(dataBuscada)

    for (let i = 0; i < doadores.length; i++) {
       const dataDoacaoConvertida = converterData(doadores[i].dataDoacao)
    if (dataDoacaoConvertida<=dataBuscadaConvertida) {
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

let menu = true

while(menu === true){
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
    opcao = rl.questionInt('Escolha uma opcao: ');
    
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
            console.log('Finalizando o Programa...')
            menu = false
            break;
        default:
            console.log('Opcao Invalida')
            break;
    }
    rl.question('Pressione ENTER para continuar...')
    }

