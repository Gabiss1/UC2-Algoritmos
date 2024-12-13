const rl = require('readline-sync')

// const num = '11/11/2001'
// // 20011111
// const numeros = []

// for (let i = 0; i < num.length; i++) {
//     if (typeof parseInt(num[i]) === 'number' /*&& parseInt(num[i]) != NaN*/) {
//         if (numeros.length === 0) {
//             numeros.push(num[i])
//         } else {
//         const numeroDuplicado = `${numeros[0]+num[i]}`
//         numeros.push(numeroDuplicado)
//         }
//     }
    
// }
// console.log(numeros)

// const num = '/'
// console.log(typeof parseInt(num))

// console.log(num[0])
// const numtipo = typeof parseInt(num[0])
// console.log(numtipo)



// numero1 = "1"
// numero2 = Number(numero1)
// console.log(typeof numero2)

// const n = 'abc'
// console.log(n.length)

// while(true){
//     const dataUltDoacao = rl.question('Digite a data da ultima doacao (dd/mm/aaaa): ')
    
//     switch (dataUltDoacao.length) {
//         case 10:
//             return dataUltDoacao
//          //teste
//         default:
//             console.log('Digite a Data no Formato Requerido')
//             break;
//     }
//     }

const doadores = [
    {nome: 'Gabriel', dataDoacao: '11/11/2011'}
]

function buscarData() {
    const dataBuscada = rl.question('Digite a Data buscado: ')
    const anoBuscado = dataBuscada.slice(6,10)
    const mesBuscado = dataBuscada.slice(3,5)
    const diaBuscado = dataBuscada.slice(0,2)

    const dataBuscadaValor = parseInt(`${anoBuscado+mesBuscado+diaBuscado}`)

    for (let i = 0; i < doadores.length; i++) {
        const ano = doadores[i].dataDoacao.slice(6,doadores[i].dataDoacao.length)
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

buscarData()