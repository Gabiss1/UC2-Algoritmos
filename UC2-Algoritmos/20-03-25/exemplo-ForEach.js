const numeros = [446, 13, 2, 200, 43, 497, 17, 2010]
let soma = 0

function somar(valor) {
    soma+=valor
}

numeros.forEach(somar)

console.log(soma)

// ForEach com Arrow Function e Parâmetros

const pokemons = ['Sceptile','Charizard','Swampert','Dragapult','Umbreon','Scizor']

pokemons.forEach((element, index, array) =>{
    console.log(`O elemento ${element} tem índice ${index}`)
    console.log('O Array é:', pokemons)
})