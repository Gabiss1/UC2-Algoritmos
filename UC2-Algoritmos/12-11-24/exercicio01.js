const pessoa = {
    nome: 'Gabriel',
    idade: 18,
    generoMusical: 'Rock'
}

function novoObjeto(pessoa) {
    const novaPessoa = {
        ...pessoa,
        comidasFavoritas: ['Sushi', 'Churrasco', 'Carbonara'],
        melhorAmigo: {
            nome: 'Kauê',
            idade: 19
        }
    }

    console.log(`O nome da pessoa é ${novaPessoa.nome} e suas comidas favoritas são ${novaPessoa.comidasFavoritas[0]}, ${novaPessoa.comidasFavoritas[1]} e ${novaPessoa.comidasFavoritas[2]}. Seu melhor amigo chama ${novaPessoa.melhorAmigo.nome} e tem ${novaPessoa.melhorAmigo.idade} anos.`)
}

novoObjeto(pessoa)