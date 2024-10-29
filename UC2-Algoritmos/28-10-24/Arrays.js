// Arrays são listas de elementos

const listaCompras = []

const listaNomes = ['Gabriel', 'Lucca', 'Lucas', 'Alice', 'Larissa', 'Bruno']

const listaNumeros = [1,2,3,4,5,6,7]

const listaBooleans = [true, false, true, false]

console.log(listaNomes)
// console.log(listaCompras) // Imprime o array vazio

// Adiciona um item ao final do array
listaCompras.push('Carne')
listaCompras.push('Batata')
console.log(listaCompras)

// Remove o último item do array
listaCompras.pop()
console.log(listaCompras)

// Exibe o item de acordo com sua posição no array
console.log(listaNumeros[2])
console.log(listaBooleans[4]) // Undefined por não possuir o item com índice 4
console.log(listaNomes[2])

// Troca o valor de um elem to no array de acordo com sua posiçaõ/índice
console.log(listaNumeros)
listaNumeros[2] = 55
console.log(listaNumeros)

// Mostra o tamanho do array
console.log(listaBooleans.length)

// Verifica se tem ou não determinado elemento na lista (retorna true ou false)
const melhoresSeries = ['The Boys', 'House of The Dragon', 'Breaking Bad', 'Pinguim']
console.log(melhoresSeries.includes('The Boys')) // retorna true
console.log(melhoresSeries.includes('The 100')) // retorna false

// Remove N elemntos a partir da posição i do array
const letras = ['A', 'B','C','D','E','F','G']

letras.splice(2,1) // O primeiro número diz a partir de qual posição começa e o segundo diz quantos são removidos
console.log(letras)
letras.splice(1,1,'Z') // O terceiro número diz algo para colocar no lugar, isso pode ser feito mais de uma vez
console.log(letras)
letras.splice(1,1,'Y', 'W') // Também posso simplesmente apagar 1 e adicionar dois em sequência 
console.log(letras)

