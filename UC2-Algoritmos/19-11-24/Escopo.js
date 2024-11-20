let nome = 'Gabriel'

function imprimeFrase() {
    function imprimeEcalcula() {
        let numero1 = 2
        let numero2 = 5
        console.log(`Olá, eu sou o ${nome}, o resultado da soma é ${numero1+numero2}`)
    }
    //let nome = 'Gabriel'
    console.log(`Olá, eu sou o ${nome}`)
} // Posso acessar variáveis de fora da função, porém, não posso acessar de fora variáveis que estão dentro da função

// Mesmo criando uma função dentro de outra, não posso acessar os valores armazenados dentro da função que está dentro da outra

imprimeFrase()
