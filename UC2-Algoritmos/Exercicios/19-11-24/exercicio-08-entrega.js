let filme1 = {
    nome: 'Jurassic Park - O Parque dos Dinossauros',
    anoLancamento: 1993
}
let filme2 = {
    nome: 'Resident Evil 2: Apocalipse',
    anoLancamento: 2004
}

function filmes(filme, filmeDois) {
    console.log(`
O primeiro filme foi lançado antes do segundo? ${filme.anoLancamento<filmeDois.anoLancamento}
O primeiro filme foi lançado no mesmo ano do segundo? ${filme.anoLancamento===filmeDois.anoLancamento}
O primeiro filme foi lançado depois do segundo? ${filme.anoLancamento>filmeDois.anoLancamento}`)
}

filmes(filme1, filme2)