function converteTemperatura(temperatura) {
    let temperaturaFahreinheit = temperatura * 1.8 + 32
    return `A temperatura de ${temperatura} graus Celsius é de ${temperaturaFahreinheit} graus Fehrenheit`
}

console.log(converteTemperatura(32))