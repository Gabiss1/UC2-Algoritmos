function minhaFuncao(objeto, propriedade) {
    return objeto[propriedade]
}

const pessoa = {
    nome: "Caio", 
    idade: 23, 
    backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// A)
// false
// undefined

// B)
// O valor false vai ser impresso, pois, estamos passando o objeto e uma propriedade para nossa função e, ao executá-la retornamos o valor de um atributo específico do objeto, nesse caso seria a propriedade backender que tem o valor false. Já no undefined, estamos tentando imprimir o atributo altura, que não existe no objeto, portanto imprime undefined.