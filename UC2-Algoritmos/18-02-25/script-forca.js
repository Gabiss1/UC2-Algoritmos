// Lista de palavras para o jogo

const palavras = []
let palavraOculta = ''
let letrasCorretas = []
let letrasErradas = []
let tentativas = 5
let numeroDeLetras = 0

// Função para escolher uma palavra aleatória da lista

function escolherPalavra() {
    const indice = Math.floor(Math.random()*palavras.length)
    palavraOculta = palavras[indice]

    numeroDeLetras = palavraOculta.replace(/ /g, '').length // Conta apenas as letras, sem considerar os espaços
    // Substitui os espaços da palavra secreta por hífens para visualização
    let palavraComHifen = palavraOculta.replace(/ /g, '-')
    letrasCorretas = Array(palavraComHifen.length).fill('_') // Inicializa o array de letras erradas

    letrasErradas = [] // Reinicia o array de letras erradas
    tentativas = 5 // Reinicia as tentativas com 5 chances 

    atualizarPalavra()
    atualizarErros()
    document.getElementById('mensagem').textContent = '' // Limpa qualquer mensagem na tela
    document.getElementById('imgAcerto').style.display = 'none'
    document.getElementById('imgErro').style.display = 'none'
    document.getElementById('tentativas').textContent = tentativas

    document.getElementById('numero-letras').textContent = `Número de Letras: ${numeroDeLetras}`
}

// Função para atrualizar a visualização da palavra

function atualizarPalavra() {
    let palavraExibida = '' // Variável da palavra exibida

    for (let i = 0; i < palavraOculta.length; i++) {
        if (letrasCorretas[i] === '-') {
            if (palavraOculta[i] === ' ') {
                palavraExibida += ' '
            } else if (palavraOculta[i] === '-') {
                palavraExibida += '-'
            } else {
                palavraExibida += '_' // Senão, mantém um traço indicando uma letra não adivinhada
            }
        } else {
            palavraExibida += letrasCorretas[i]
        }
        palavraExibida += ' '
    }
    document.getElementById('palavra-secreta').textContent = palavraExibida.trim() // Remove o último espaço extra
}

function atualizarErros() {
    const letra = document.getElementById('letra').ariaValueMax.toLowerCase() // Obtém a letra digitada e converte para minúscula

    // Verificar se a letra não foi tentada antes e se não é uma letra vazia
    if (letra && !letrasErradas.includes(letra && !letrasCorretas.includes(letra))) {
        
    if (palavraOculta.includes(letra)) {
        for (let i = 0; i < palavraOculta.length; i++) {
            // Substitui "_" pelas letras corretas na posição correspondente
            if (palavraOculta[i] === letra) {
                letrasCorretas[i] = letra
            }
        }
        
        }
    }
}

