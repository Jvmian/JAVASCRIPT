function carregar(){
var result = window.document.getElementById('resultado')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

result.innerHTML = `<p>Agora são <strong>${hora} horas</strong>.</p>`
if (hora >= 5 && hora <= 12){
    img.src = 'imagens/manha.png'
    document.body.style.background = '#87CEEB'
} else if ( hora > 12 && hora <= 18){
    img.src = 'imagens/tarde.png'
    document.body.style.background = '#ffb120'
} else if (hora > 18 && hora < 24){
    img.src = 'imagens/noite.png'
    document.body.style.background = '#000080'
} else {
    img.src = 'imagens/madrugada.png'
    document.body.style.background = '#483D8B'
}
}

