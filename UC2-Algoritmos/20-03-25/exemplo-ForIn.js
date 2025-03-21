let romance = {
    'Trabalhadores do Mar':'Victor Hugo',
    'A culpa é das Estrelas':'John Green',
    'Crepúsculo':'Stephanie Meyer'
}

for (const livro in romance) {
    console.log(`O autor do livro ${livro} é ${romance[livro]}`)
}