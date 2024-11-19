let pessoa = {
    nome: 'Gabriel Garcez de Oliveira',
    apelidos: ['Gabiss', 'Gabileu', 'Oliveira']
}

let novaPessoa = {
    ...pessoa,
    apelidos: ['Papel', 'Gabris', 'Brino']
}
function mostrarPessoa(pessoa) {
    return `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`
}

console.log(mostrarPessoa(pessoa))
console.log(mostrarPessoa(novaPessoa))