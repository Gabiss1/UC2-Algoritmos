//Operador E (AND) - Símbolo: &&
//Retorna TRUE APENAS SE TODOS OS VALORES FORAM TRUE
// Apenas um único FALSE já é o suficiente para retornar false
console.log(true && true)
console.log(true && false)
console.log(false && false)

let idade = 18
let maiorIdade = idade >= 18
let temCarteira = true
let temCarro = true

//Operador OU (OR) - Símbolo: ||
//Retorna FALSE APENAS SE TODOS OS ENVOLVIDOS forem false
// Apenas um único true já é suficiente para retornar true

console.log(true || true) //TRUE
console.log(true || false) //TRUE
console.log(false || false) //FALSE

let temTrabalho = true
let economiza = true
let investe = true
let herdeiro = true

console.log((temTrabalho && economiza && investe) || herdeiro)

//Operador NÃO/NEGAÇÃO (NOT) - Símbolo: !
//Inverte o estado true para false e vice e versa

let ligado = true

console.log(!ligado)
console.log(!true)
console.log(!false)