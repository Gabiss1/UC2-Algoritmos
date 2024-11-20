const rl = require('readline-sync')

function dadosUsuario() {
    const nome = rl.question('Qual seu nome? ')
    const idade = rl.questionInt('Qual sua idade? ')
    const profissao = rl.question('Qual sua profissao? ')

    const pessoa = {
        nome: nome,
        idade: idade,
        profissao: profissao
    }

    console.log(pessoa)
    console.log(typeof pessoa)
}

dadosUsuario()