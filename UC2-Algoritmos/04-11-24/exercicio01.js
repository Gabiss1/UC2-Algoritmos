let pokemon = {
    nome: 'Sceptile',
    estágio: 'Forma Final',
    tipagem: 'Grama',
    habilidadesPrincipais: ['Folha Navalha', 'Rajada de Sementes', 'Raio Solar', 'Ataque Rápido'],

    ataque: function() {
        console.log(`${pokemon.nome}, utilize ${pokemon.habilidadesPrincipais[0]}.`)
    }
}

console.log(`O nome deste Pokémon é ${pokemon.nome}.`)
console.log(`Este Pokémon já está em sua ${pokemon.estágio}.`)
console.log(`Ele é um dos melhores Pokémons do Tipo ${pokemon.tipagem} da região de Hoenn.`)
console.log(`Seu movimento assinatura é o ${pokemon.habilidadesPrincipais[0]}, poderoso golpe do Tipo grama. Ele também possui: ${pokemon.habilidadesPrincipais[1]}, ${pokemon.habilidadesPrincipais[2]}, ${pokemon.habilidadesPrincipais[3]} como suas outras habilidades.`)

pokemon.ataque()
