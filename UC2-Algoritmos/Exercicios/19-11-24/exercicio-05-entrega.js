let pessoa = {
    nome: 'Gabriel',
    idade: 18,
    profissao: 'Estudante'
}

let outraPessoa = {
    nome: 'Eliel',
    idade: 40,
    profissao: 'Engenheiro'
}

function operacao(objeto) {
    const resultado = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
    return resultado
}

console.log(operacao(pessoa))
console.log(operacao(outraPessoa))