// Variáveis

// Crie uma variável chamada carName e atribua o valor Maverick a ela:

let carName = 'Maverick'

// Crie uma variável chamada x e atribua o valor 50 a ela:

// let x = 50

// Exiba a soma de 5 + 10 usando duas variáveis x e y:

let y = 10
x = 5
console.log(y+x)

// Complete o código criando uma variável z, atribuindo x + y a ela e exibindo o resultado:
// Declare estas três variáveis em uma única linha:
 x = 5, y = 10, z = x+y
// let z = y+x 
console.log(z)

// Operadores

// Multiplique 10 por 5 e exiba o resultado:

let soma = 10*5

console.log(soma)

// Exiba o resto da divisão de 15 por 9:

let resto = 15%9

console.log(resto)

// Use o operador de atribuição correto para fazer x ser igual a x + y:

x = x+y
console.log(x)

// Use o operador de atribuição correto para fazer x ser igual a x * y:

x = x*y
console.log(x)


// Tipos de Dados

// Use comentários para descrever o tipo correto de cada variável:

/*
Números são variáveis do tipo Number;
Textos são variáveis do tipo String;
Respostas como True e False são do tipo Boolean.
*/

// Funções

// Complete o código, criando uma função chamada myFunction:
// Complete o código para retornar "Hello":

function myFunction() {
    console.log('Hello World!')
}

// Execute a função chamada myFunction:

myFunction()

// Objetos

// Mostre a informação "John" em um console.log:
// Adicione a propriedade country: Norway ao objeto person:
// Crie um objeto e exiba uma mensagem:

let person = {
    nome: 'John',
    country: 'Norway',
    apresentacao: function(){
        return `Hi, I am ${person.nome} and I am from ${person.country}`
    }
}

console.log(person.apresentacao())

// Strings

// Exiba o comprimento de txt:

let txt = 'Gabriel - Gabiss'
console.log(txt.length)

// Concatene duas strings:

let txt2 = ' - Sky Striker!'
console.log(txt+txt2)

// Converta para maiúsculas:

console.log(txt.toUpperCase())

// Substitua "Hello" por "Welcome":

let ola = 'Hello World'
console.log(ola.replace('Hello', 'Welcome'))

// Arrays

let marcas = ['Toyta', 'Volvo','Chevrolett', 'Jeep', 'Volksvagen', ]

// Mostre "Volvo":

console.log(marcas[1])

// Mude o primeiro item para "Ford":

marcas[0] = 'Ford'
console.log(marcas[0])

// Mostre o número de itens:

console.log(`O Array Marcas tem ${marcas.length} itens`)

// Remova o último item:

console.log(marcas)
marcas.pop()
console.log(marcas)

let frutas = ['Banana', 'Maracujá', 'Laranja', 'Maçã']

// Adicione "Kiwi":

console.log(frutas)
frutas.push('Kiwi')
console.log(frutas)

// Remova "Orange" e "Apple":

frutas.splice(2, 2)
console.log(frutas)