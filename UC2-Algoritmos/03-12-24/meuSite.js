const btn1 = document.getElementById('btn')

function mostraAlerta() {
    alert('Apertou o botão')
    document.body.style.backgroundColor = 'Red'
    console.log('Apareceu')
}


btn1.addEventListener('click', mostraAlerta)