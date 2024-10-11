let temCarteira = true
let maiorIdade = 18 >= 18

// SE -- IF
// SE NÃO -- ELSE
if (temCarteira && maiorIdade) {
    console.log("Você tem carteira e é maior de idade. Pode dirigir")
} else if (maiorIdade) {
    console.log('Você é maior de idade, mas não tem carteira. Vá trabalhar')
} else {
    console.log('Você não pode dirigir. Que peninha, vai a pé')
}

