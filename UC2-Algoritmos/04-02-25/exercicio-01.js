let nome = 'Gabriel'
let sobrenome = 'Garcez de Oliveira'
let idade = 18
let estudante = true

function Escola(estudante) {
    let confirmacaoEstudante
    if (estudante === true) {
        confirmacaoEstudante = 'Sim'
    } else {
        confirmacaoEstudante = 'Não'
    }
    return confirmacaoEstudante
}

let confirmar = Escola(estudante)

console.log(`Olá, meu nome é ${nome} ${sobrenome} e tenho ${idade}.
Estudante: ${confirmar}`)

console.log(typeof idade)

let premio1 = 'Globo de Ouro'
let premio2 = 'Melhor atriz do Festival de Cinema de Veneza'
let premio3 = 'Prêmio Shell de melhor Atriz'
let premio4 = 'Oscar'

console.log(`Esses são os prêmios da Fernanda:
1 - ${premio1}
2 - ${premio2}
3 - ${premio3}

Ela ainda ganhará o ${premio4}
`)



