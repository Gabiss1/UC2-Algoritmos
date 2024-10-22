for (let contador = 10; contador >= 0; contador--) {
    if (contador === 0) {
        console.log(`BOOOOOOOOOM!!!`)
    } else if (contador%2 === 0 && contador !== 0) {
        console.log('TIC!')
    } else {
        console.log('TAK!')
    }
    
}