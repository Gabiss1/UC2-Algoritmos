const listaDeTarefas = ['Varrer a Casa', 'Lavar a Louça', 'Arrumar o Quarto', 'Fazer a comida']

console.log(listaDeTarefas)
listaDeTarefas.push('Tirar o Lixo')
listaDeTarefas[2] = 'Lavar as Janelas'

console.log(listaDeTarefas)

console.log(`
${listaDeTarefas[0]}
${listaDeTarefas[1]}
${listaDeTarefas[2]}
${listaDeTarefas[3]}
${listaDeTarefas[4]}
${listaDeTarefas}
`)