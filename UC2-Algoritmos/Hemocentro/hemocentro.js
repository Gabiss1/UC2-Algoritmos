const rl = require('readline-sync')  // Pacote para usar question no terminal.

const doadores = []  // Array para armazenas os objetos "Cadastrados" que serão criados pela função cadastro

let estado= true  // Variável de Status para iniciar e finalizar loopings

// Função para Cadastro de Doadores
function cadastro() {
    const nome = rl.question('Digite seu Nome Completo: ')
    const idade = rl.questionInt('Digite sua Idade: ')
    const peso = rl.questionInt('Digite seu Peso: ')
    let tipoSangVerficado

       while (estado === true) {
           const tipoSang = rl.question('Digite seu Tipo Sanguineo (A-, B+, AB+, O-, etc.): ').toUpperCase()
   
           if (tipoSang === 'A' || tipoSang === 'B' || tipoSang === 'O' || tipoSang === 'AB') {
               tipoSangVerficado = tipoSang+'+'
               estado = false
           } else if (tipoSang === 'A+' || tipoSang === 'B+' || tipoSang === 'O+' || tipoSang === 'AB+' || tipoSang === 'A-' || tipoSang === 'B-' || tipoSang === 'O-' || tipoSang === 'AB-'){
               tipoSangVerficado = tipoSang
               estado = false
           } else {
               console.log('Tipo sanguíneo Inválido! Digite Novamente')
           }
       } 
        estado = true

     while(estado === true){
         const dataUltDoacao = rl.question('Digite a data da ultima doacao (dd/mm/aaaa): ')
         const checagemBarra1 = dataUltDoacao[5]
         const checagemBarra2 = dataUltDoacao[2]
         const valorDia = dataUltDoacao.slice(0,2)
         const valorMes = dataUltDoacao.slice(3,5)
         const valorAno = dataUltDoacao.slice(6,dataUltDoacao.length)
     
         const checagemData = Number(valorDia+valorMes+valorAno)
     
         if (dataUltDoacao.length>=10 && checagemData.toString() !== 'NaN' && checagemBarra1 === '/' && checagemBarra2 === '/') {
             if (valorDia<=31 && valorMes<=12) {
                 const cadastrados = {
                     nome: nome,
                     idade: idade,
                     peso: peso,
                     tipoSang: tipoSangVerficado,
                     dataDoacao: dataUltDoacao
                 } 
                 doadores.push(cadastrados)
                 console.log('Doador Cadastrado com Sucesso!')
                 estado = false
             } else {
                 console.log('Cadastre uma Data Válida!')
             }
               
         }
         else {
             console.log('Cadastre a Data no Formato Exigido!')
         }
     }
        estado = true
}
// A função reliza as seguintes perguntas em relação ao usuário: Nome, Idade, Peso, Tipo Sanguíneo e Data da Última Doação.
// Após inserir os valores de Tipo Sanguíneo e Data da Última doação os valores passam por um processo de validação.
// O processo de validação do Sangue consiste em checar se o tipo inserido existe e, além disso, corrige o valor inserido caso esteja sem sinal após a Letra.
// A validacão de data consiste em verificar se o formato inserido condiz com o formato exigido e se os valoress condizem com as possibilidades.
// Nela também usamos o método Slice, que serve para separar determinadas partes do valor inserido, em formato de texto, pelo usuário. 
// Isso ocorre declarando, no método, determinada posição e quantos caractéres serão selecionados a partir da posição escolhida. 
// Esse valor pode ser armazenado dentro de uma variável para, depois, ser usado pela função.
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Função de Listar os Doadores
function listar() {
    for (let i = 0; i < doadores.length; i++) {
        if (doadores.length>0) {
            console.log(doadores[i])
        } else {
            console.log('Não há doadores cadastrados!')
        }
       
    }
}
// Essa função lê e exibe os valores inseridos no Array de Doadores.
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Função de Busca por Tipo Sanguíneo
function buscarSang() {
    let tipoSanguineoBuscado = rl.question('Digite o Tipo sanguineo que voce deseja procurar: ')
    const pesquisa = []

    for (let i = 0; i < doadores.length; i++) {
        if (tipoSanguineoBuscado.length === 1 || tipoSanguineoBuscado.toUpperCase() === 'AB') {
            tipoSanguineoBuscado = tipoSanguineoBuscado+'+' 
            if (doadores[i].tipoSang === tipoSanguineoBuscado.toUpperCase()) {
                pesquisa.push(doadores[i])
            }
        } else 
        if (doadores[i].tipoSang === tipoSanguineoBuscado.toUpperCase()) {
            pesquisa.push(doadores[i])
        }
    }
    if (pesquisa.length>0) {
        console.log(pesquisa)
    } else {
        console.log('Não Há ninguém cadastrado com esse tipo sanguíneo!')
    }
  
}
// Essa função permite ao usuário buscar os doadores que possuem um Tipo Sanguíneo específico.
// Para isso, ela realiza um pergunta ao usuário, acessa o array de doadores e exibe os doadores em que o tipo sanguíneo cadastrado condiz com o tipo buscado.
// Essa função também corrige o valor digitado pelo usuário adicionando o sinal de + caso não haja sinal após a letra.
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Função de Busca por Data
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
// Essa função permite que o usuário busque todos os doadores que relizaram sua doação até determinada data.
// Para isso, ela realiza uma pergunta ao usuário, acessa o array de doadores e exibe os doações realizadas até a data inserida pelo usuário.
// Na comparação de datas é usada uma função específica para comparar duas datas e descobrir qual delas vem antes e depois.
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Menu de Opções
while(estado === true){
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
        break;
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
            estado = false
            break;
        default:
            console.log('Opcao Invalida')
            break;
    }
    rl.question('Pressione ENTER para continuar...')
    }

// Esse looping exibe um menu mostrando as opções oferecidas e permitindo ao usuário escolher qual deseja usar.
// Ao receber o valor digitado pelo usuário a função condizente é realizada, voltando ao menu após sua conclusão.
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------