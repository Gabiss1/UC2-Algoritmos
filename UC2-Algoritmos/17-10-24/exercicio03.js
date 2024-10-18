function ehParOuImpar(numero) {
    if (numero%2 === 0 && numero !==0) {
        console.log("É par.")
    } else if (numero%2>0) {
        console.log('É ímpar.')
    } else {
        console.log('É zero.')
    }
}

ehParOuImpar(233)
ehParOuImpar(556)
ehParOuImpar(0000)