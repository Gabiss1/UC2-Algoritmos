// Trabalhando lógica com matrizes

let tabuleiro = [
    ['','',''], // Células vazias
    ['','',''],
    ['','','']
]

let vez = 'O'
let jogoAtivo = true // Deixa o jogo ativo (true significa que o jogo ainda está funcionando)

function renderizarTabuleiro() {
    const tabuleiroDiv = document.getElementById('tabuleiro') // Pega o div do tabuleiro
    tabuleiroDiv.innerHTML = '' // Limpa o tabuleiro antes de renderizar a função novamente

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const celula = document.createElement('div')
            celula.classList.add('celula') // Adiciona a classe 'celula' para o estilo CSS
            celula.textContent = tabuleiro[i][j]
            // Quando a Célula é clicada, chama a função fazerJogada()
            celula.onclick = () => fazerJogada(i, j)   
            tabuleiroDiv.appendChild(celula) // Adiciona a célula ao tabuleiro
        }
    }
}

function fazerJogada(linha, coluna) {
    if (tabuleiro[linha][coluna] === '' && jogoAtivo) {
        tabuleiro[linha][coluna] = vez // Marca a célula com o símbolo do jogador (X ou O)
        verificarVencedor() // Verificar se algum jogador venceu
        vez = vez === 'X' ? 'O' : 'X' // Alternar entre X e O
        renderizarTabuleiro() // Atualiza a Interface
    }
}