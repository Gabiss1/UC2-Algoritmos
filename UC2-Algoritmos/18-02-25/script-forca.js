function verificarLetra(){
    let palavra = 'Sceptile'
    let letra =  document.getElementById('letra').value

    let numeroLetras = palavra.length
    let palavraOculta = ''

    palavra = palavra.replaceAll(letra, '-')

    for (let i = 0; i < numeroLetras; i++) { 
        
        if (palavra[i] === '-') {
            palavraOculta = palavraOculta+letra
        } else {
            palavraOculta = palavraOculta+'-'
        }
    }

    console.log(palavraOculta)
    
}

// let palavra = 'sceptile'
// let letra = 'a'
// palavra = palavra.replaceAll('e', letra)
// palavra = palavra.replace(palavra[0],letra)

// console.log(palavra[0])