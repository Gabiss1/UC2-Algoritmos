let saldo = 0.00

function atualizarSaldo() {
    document.getElementById('saldo').textContent = saldo.toFixed(2)
    // Seleciona p elemnto Saldo do HTML e insere um texto nele, também fixa em 2 casas decimais
}

function sacar() {
    valor = parseFloat(document.getElementById('valor').value)
    if (isNaN(valor) || valor <= 0) {
        alert('Insira um número válido!')
        return
    }

    if (valor > saldo) {
        alert('Saldo insuficiente! Gostaria de fazer um empréstimo junto ao Banco Imortal, aplicando uma taxa padrão de 5% ao mês e uma taxa extra de 20% destinada especialmente à Janela de Transferência do clube?')
        return
    }
    saldo -= valor
    atualizarSaldo()

    alert(`Valor de R$${valor} sacado com sucesso!!`)
}

function depositar() {
    valor = parseFloat(document.getElementById('valor').value)
    // Obtém o valor digitado e transforma em decimal
    if (isNaN(valor) || valor <= 0) {
        alert('Insira um número válido!')
        return
    }
    valorTaxa = valor*0.03
    valorTaxado = valor - valorTaxa
    saldo += valorTaxado
    // Soma o valor ao saldo
    atualizarSaldo()

    alert('Valor depositado com sucesso!! Sua taxa de 3% já foi direcionada ao Grêmio, obrigado pela ajuda voluntária!!')
}
