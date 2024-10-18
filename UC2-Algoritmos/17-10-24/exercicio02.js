function mediaNotas(nota1, nota2, nota3) {
    totalNota = nota1 + nota2 + nota3
    media = totalNota / 3
    console.log(`A Média do aluno é ${media.toFixed(2)}.`)
}

mediaNotas(7, 8, 7)