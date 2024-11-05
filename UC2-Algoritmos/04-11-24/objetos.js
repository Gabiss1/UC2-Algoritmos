// Como criar objetos:
let pessoa = {
    // Atributo/Propriedade
    // Não usamos let nem const
    // Usamos ':' ao invés de '='
    nome: 'Leonardo',
    idade: 18,
    cpf: '38765728910',
    filmesFavoritos: ['Jurassic Park', 'Star Wars', 'Tróia', 'Senhor dos Anéis', 'World Of Warcraft'],
    
    // Funções criadas dentro de objetos podem ser chamadas de Métodos
    trabalhar: function() {
        console.log(`${pessoa.nome} está trabalhando. Ele não vê a hora de chegar em casa.`)
    }
}

console.log(pessoa)

// Para acessar um dos atributos fazemos assim:
console.log(pessoa.nome)
console.log(pessoa.filmesFavoritos)
console.log(pessoa.filmesFavoritos[4]) // Para imprimir um item específico da lista

// Atualizar o valor de um atributo
pessoa.idade = 17
console.log(pessoa.idade)

// Adicionar um atributo
pessoa.altura = 1.65
console.log(pessoa.altura)

pessoa.trabalhar() // Assim chamamos o Método do meu objeto