const numeros = [1, 2, 3, 7, 11, 13]
// let array1 = []

// for (let i = 0; i < numeros.length; i++) {
//     array1.push(numeros[i])
//     if (array1.length >= 2) {
//         if (array1[0]>array1[1]) {
//             array1.splice(1,1)
//         } else {
//             array1.splice(0,1)
//         }
//     }

// }

// console.log(array1[0])

let numMaior = 0

for (let i = 0; i < numeros.length; i++) {
    if (numMaior < numeros[i]) {
        numMaior = numeros[i]
    }
    
}

console.log(numMaior)