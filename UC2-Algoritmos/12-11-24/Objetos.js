// Objeto dentro de um Objeto
const donoPet = {
    nome: 'Dono do Pet',
    idade: 18,
    pet: {
        nome: 'Sapato',
        raca: 'Gato Preto',
        idade: 7
    }
}

console.log(donoPet.pet.nome)

// Array com Objetos

const professores = [
    {nome: 'Leonardo', uc: '2'},
    {nome: 'Lucas', uc: '3'},
    {nome: 'Maria', uc: '5'}
]

console.log(professores[0].uc)

// Espalhamento 

const professor = {
    nome: 'Léo',
    idade: 29,
    disciplinas: ['Algoritmos', 'Banco de Dados', 'Java']
}

const novoProfessor = {
    ...professor,
    nome: 'Lucas',
    idade: 30,
    veiculo: 'Fusca'
}

console.log(professor)
console.log(novoProfessor)