function saudacoes(nome, sobrenome, funcao) {
    let mensagemSaudacao = `Olá ${nome} ${sobrenome}, ${funcao} do Senac, como você está?`
    return mensagemSaudacao
}

console.log(saudacoes('Gabriel', 'Oliveira', 'Aluno'))