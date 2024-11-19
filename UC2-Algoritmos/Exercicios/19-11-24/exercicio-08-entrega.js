function filmes() {
    let filme1 = {
        nome: 'Jurassic Park - O Parque dos Dinossauros',
        anoLancamento: 1993
    }
    let filme2 = {
        nome: 'Resident Evil 2: Apocalipse',
        anoLancamento: 2004
    }

    console.log(`
O primeiro filme foi lançado antes do segundo? ${filme1.anoLancamento<filme2.anoLancamento}
O primeiro filme foi lançado no mesmo ano do segundo? ${filme1.anoLancamento===filme2.anoLancamento}
O primeiro filme foi lançado depois do segundo? ${filme1.anoLancamento>filme2.anoLancamento}`)
}

filmes()