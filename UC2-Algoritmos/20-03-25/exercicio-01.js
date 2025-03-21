const numeros = [19, 28, 37, 46, 55]
let maiorNumero = []

for (const posicao of numeros) {
    maiorNumero.push(posicao)
    if (maiorNumero.length >= 2) {
        if (maiorNumero[0]>maiorNumero[1]) {
            maiorNumero.splice(1,1)
        } else {
            maiorNumero.splice(0,1)
        }
    }
}

console.log(maiorNumero[0])