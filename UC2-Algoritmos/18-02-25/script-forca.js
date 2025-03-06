// Lista de palavras para o jogo

const palavras = ['Frigibax']
let palavraOculta = ''
let letrasCorretas = []
let letrasErradas = []
let tentativas = 5
let numeroDeLetras = 0

// Função para escolher uma palavra aleatória da lista

function escolherPalavra() {
    const indice = Math.floor(Math.random()*palavras.length)
    palavraOculta = palavras[indice].toLowerCase()

    numeroDeLetras = palavraOculta.replace(/ /g, '').length // Conta apenas as letras, sem considerar os espaços
    // Substitui os espaços da palavra secreta por hífens para visualização
    let palavraComHifen = palavraOculta.replace(/ /g, '-')
    letrasCorretas = Array(palavraComHifen.length).fill('_') // Inicializa o array de letras erradas

    letrasErradas = [] // Reinicia o array de letras erradas
    tentativas = 5 // Reinicia as tentativas com 5 chances 

    atualizarPalavra()
    // atualizarErros()

    document.getElementById('mensagem').textContent = '' // Limpa qualquer mensagem na tela
    document.getElementById('imgAcerto').style.display = 'none'
    document.getElementById('imgErro').style.display = 'none'
    document.getElementById('tentativas-contagem').textContent = tentativas

    document.getElementById('numero-letras').textContent = `Número de Letras: ${numeroDeLetras}`
}

// Função para atrualizar a visualização da palavra

function atualizarPalavra() {
    let palavraExibida = '' // Variável da palavra exibida

    for (let i = 0; i < palavraOculta.toLowerCase().length; i++) {
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

    console.log(palavraExibida)
    document.getElementById('pokemon-secreto').textContent = palavraExibida.trim()// Remove o último espaço extra
}

function atualizarErros() {
    document.getElementById('tentativas-contagem').textContent = tentativas; // Atualiza a contagem de tentativas
}

function verificarLetra(){
    const letra = document.getElementById('letra').value.toLowerCase() // Obtém a letra digitada e converte para minúscula
    // Verificar se a letra não foi tentada antes e se não é uma letra vazia
    if (letra && !letrasErradas.includes(letra && !letrasCorretas.includes(letra))) {
        
    if (palavraOculta.toLowerCase().includes(letra)) {
        for (let i = 0; i < palavraOculta.length; i++) {
            // Substitui "_" pelas letras corretas na posição correspondente
            if (palavraOculta[i] === letra) {
                letrasCorretas[i] = letra
            }
        }
        document.getElementById('mensagem').textContent = `Você acertou a Letra: "${letra}".` // Exibe a mensagem de acerto
        document.getElementById('mensagem').style.color = 'green' // Deixa a mensagem verde
        document.getElementById('imgAcerto').style.display = 'block' // Exibe imagem de acerto
        document.getElementById('imgErro').style.display = 'none' // Esconde imagem de erro
        
        } else {
            letrasErradas.push(letra) // Adiciona a lertra "errado" ao array
            tentativas--
            document.getElementById('mensagem').textContent = `Você errou a Letra: "${letra}".`
            document.getElementById('mensagem').style.color = 'red'
            document.getElementById('imgAcerto').style.display = 'none'
            document.getElementById('imgErro').style.display = 'block'
            atualizarErros()
        }
        document.getElementById('letra').value = '' // Limpa a caixa

        atualizarPalavra()

        //
        if (letrasCorretas.join('') === palavraOculta.toLowerCase().replace(/ /g, '-')) {
            document.getElementById('mensagem').textContent = `Você ganhou cara! A palavra era: ${palavraOculta}`
            document.getElementById('mensagem').style.color = 'green'
        } else if (tentativas <= 0) {
            document.getElementById('mensagem').textContent = `Ahhh que peninha... você perdeu! A palavra era ${palavraOculta}`
            document.getElementById('mensagem').style.color = 'red'
        } 
    }
}

function reiniciarJogo() {
    escolherPalavra() // Escolhe uma nova palavra
    document.getElementById('mensagem').textContent = '' // Limpa qualquer mensagem existente
}
