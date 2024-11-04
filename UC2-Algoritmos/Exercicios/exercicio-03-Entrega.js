const readline = require('readline-sync')

let comidasFavoritas = ['Sushi', 'Churrasco', 'Carreteiro', 'Carbonara', 'Ensopado']

console.log(comidasFavoritas)

console.log(`Essas são as minhas comidas preferidas: 
${comidasFavoritas[0]} 
${comidasFavoritas[1]} 
${comidasFavoritas[2]} 
${comidasFavoritas[3]} 
${comidasFavoritas[4]} 
`)

const comidaUsuario = readline.question('Agora me diga uma de suas comidas favoritas: ')

comidasFavoritas[1] = comidaUsuario

console.log(comidasFavoritas)