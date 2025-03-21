const numeros = [446, 13, 2, 200, 43, 497, 17, 2010]
let somatorio = 0

for (const controle of numeros) {
    if (controle%2 === 0) {
        somatorio += controle
    }
}

console.log(somatorio)