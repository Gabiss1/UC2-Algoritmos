const readline = require('readline-sync')

let listaDeTarefas = []

const tarefa1 = readline.question('Digite uma tarefa: ')
listaDeTarefas.push(tarefa1)

const tarefa2 = readline.question('Mais uma: ')
listaDeTarefas.push(tarefa2)

const tarefa3 = readline.question('A ultima: ')
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

const tarefaRealizada = readline.questionInt(`
1 - ${listaDeTarefas[0]}
2 - ${listaDeTarefas[1]}
3 - ${listaDeTarefas[2]}
Digite o numero da tarefa que vc ja realizou: 
`)

let valorRemover = tarefaRealizada -1



listaDeTarefas.splice(valorRemover, 1)

console.log(listaDeTarefas)