// Funções executam uma determinada tarefa que criamos elas para fazer
// primeiro precisamos criar a função, e depois de criada, precisamos executá-la/chamá-la
// Para criar uma função, usamos a palvra resrvada "function" 

function calculaAreaRetangulo(base, altura) {
    const area = base * altura
    console.log(area)
}

calculaAreaRetangulo(4,6)
calculaAreaRetangulo(7,9)
calculaAreaRetangulo(10,20)

function frase() {
    console.log('Olá galera!')
}

frase()

function informacoes(nome, idade, altura) {
    console.log(`Olá ${nome}, você tem ${idade} anos e ${altura} metros de altura`)
}

informacoes('Gabriel', 18, 1.66)

function calculo(num1, num2) {
    let soma = num1+num2
    return soma
}

let numero = calculo(2,3)
console.log(numero+10)
console.log(calculo(1,2))

function converteTemperatura(tempC) {
    let tempF = tempC * 1.8 + 32
    return {tempC, tempF}
}

const {tempC, tempF} = converteTemperatura(30)

console.log(tempC)
console.log(tempF)