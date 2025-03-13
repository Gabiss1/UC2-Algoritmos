const filmes = {
    ficcaoCientifica: [
        {
            titulo: 'Jurassic Park - O Parque dos Dinossauros',
            diretor: 'Steven Spielberg',
            elenco: 'Ellen Dern, Jeff Goldblum, Sam Neil e Richard Attenborough.',
            sinopse: 'Os paleontólogos Alan Grant, Ellie Sattler e o matemático Ian Malcolm fazem parte de um seleto grupo escolhido para visitar uma ilha habitada por dinossauros criados a partir de DNA pré-histórico. O idealizador do projeto e bilionário John Hammond garante a todos que a instalação é completamente segura.',
            imagem: './Imagens/jurassicPark.jfif'
        },
        {
            titulo: 'Alien, O Oitavo Passageiro',
            diretor: 'Ridley Scott',
            elenco: 'Sigourney Weaver, Tom Skerrit, Ian Holm e O Alien.',
            sinopse: 'A tripulação do cargueiro interestelar Nostromo é despertada no meio da viagem para casa por estranhos sinais de socorro vindos de uma nave alienígena em um planeta aparentemente deserto.',
            imagem: './Imagens/alien.jfif'
        },
        {
            titulo: 'Interestelar',
            diretor: 'Christopher Nolan',
            elenco: 'Matthew McConaughe, Anne Hathaway, Timothée Chalamet e Mat Daemon',
            sinopse: 'As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.',
            imagem: './Imagens/interestelar.jfif'
        }
    ],
    animacao:[
        {
            titulo: 'O Menino e a Garça',
            diretor: 'Hayao Miyazaki',
            elenco: 'Christian Bale, Karen Fukuhara e Luca Padovan e Florence Pugh.',
            sinopse: 'Mahito, um menino de 12 anos, luta para se estabelecer em uma nova cidade após a morte de sua mãe. Quando uma garça falante conta para Mahito que sua mãe ainda está viva, ele entra em uma torre abandonada em busca dela, o que o leva para outro mundo.',
            imagem: './Imagens/oMeninoEAGarca.jfif'
        },
        {
            titulo: 'Gato de Botas 2: O Último Desejo',
            diretor: 'Joel Crawford',
            elenco: 'Antonio Bandeira, Wagner Moura, Salma Hayek e Harvey Guillén.',
            sinopse: 'O Gato de Botas descobre que sua paixão pela aventura cobrou seu preço: ele já gastou oito de suas nove vidas. Ele então parte em uma jornada épica para encontrar o mítico Último Desejo e restaurar suas nove vidas.',
            imagem: './Imagens/oGatodeBotas2.jfif'
        },
        {
            titulo: 'Carros 2',
            diretor: 'John Lasseter',
            elenco: 'Owen Wilson, John Turturro, Emily Mortimer e Eddie Izzard.',
            sinopse: 'O astro das corridas, Relâmpago McQueen, e o carro-guincho, Mate, viajam para disputar o primeiro Grand Prix Mundial, que irá revelar o carro mais veloz do planeta. Nessa jornada imperdível, Mate se envolve com um grupo de espionagem e vive grandes aventuras com seus amigos.',
            imagem: './Imagens/carros2.jfif'
        }
    ],
    terror:[
        {
            titulo: 'Resident Evil 2: Apocalipse',
            diretor: 'Alexander Witt',
            elenco: 'Milla Jovovich, Oded Fehr, Sienna Guillory e Mike Epps.',
            sinopse: 'A heroína Alice tenta livrar Raccoon City de um segundo ataque de zumbis, mas a diabólica Umbrella Corporation e os militares têm uma nova arma secreta. Os sobreviventes Jill Valentine, Carlos Oliviera e Nicholai lutam ao lado de Alice contra um novo e melhorado Matt Addison de codinome Nemesis.',
            imagem: './Imagens/residentEvil.jpg'
        },
        {
            titulo: 'O Chamado',
            diretor: 'Gore Verbinski',
            elenco: 'Daveigh Chase, Naomi Watt, Martin Henderson e David Dorfman.',
            sinopse: 'A jornalista Rachel Keller decide investigar a morte de sua sobrinha e descobre que quatro adolescentes morreram misteriosamente sete dias depois de assistir a um vídeo com imagens assustadoras. Agora ela tenta solucionar o mistério e impedir que a profecia se realize, já que ela e seu filho também assistiram ao vídeo.',
            imagem: './Imagens/oChamado.jfif'
        },
        {
            titulo: 'A Bruxa de Blair',
            diretor: 'Eduardo Sanchéz e Daniel Myrick',
            elenco: 'Heather Donahue, Joshua Leonard, Ed Swanson e Michael C. Williams.',
            sinopse: 'Um grupo de três jovens cineastas desaparece ao entrar em uma floresta de Maryland para gravar um documentário sobre uma lenda local. Anos depois, a câmera que usavam é encontrada.',
            imagem: './Imagens/bruxaDeBlair.jpg'
        }
    ]
}


function mostrarFilmes() {
    const ficcaoCientificaContainer = document.getElementById('ficcaoCientifica')
    const animacaoContainer = document.getElementById('animacao')    
    const terrorContainer = document.getElementById('terror')

    function exibirCategoria(filmes, container) {
        filmes.forEach(filme => {
            const divFilme = document.createElement('div')
            divFilme.classList.add('filme')
            divFilme.innerHTML = `
            <img src="${filme.imagem}" alt="${filme.titulo}">
            <h3>${filme.titulo}</h3>
            <p><strong>Diretor: </strong> ${filme.diretor}</p>
            <p><strong>Elenco: </strong> |${filme.elenco}</p>
            <p><strong>Sinopse: </strong> |${filme.sinopse}</p>
            `
            container.appendChild(divFilme)
        });
    }

    exibirCategoria(filmes.ficcaoCientifica, ficcaoCientificaContainer)
    exibirCategoria(filmes.animacao, animacaoContainer)
    exibirCategoria(filmes.terror. terrorContainer)
}

mostrarFilmes()
