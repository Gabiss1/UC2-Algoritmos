const palavrasFrase = ['Oi', 'sumido', 'tudo', 'bem?', 'Saudades']
let frase = ''

for (const controle of palavrasFrase) {
    if (frase === '') {
        frase = frase+controle
    } else {
        frase = frase+' '+controle
    }
}
console.log(frase)