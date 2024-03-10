function carregar(){
var nome = window.prompt('Qual seu nome ?')
var result = window.document.getElementById('resultado')
var boaa = window.document.getElementById('boa')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
var seg = data.getSeconds()

result.innerHTML = `<p>Agora são <strong>${hora} horas, ${min} minutos e ${seg} segundos</strong>.</p>`
if (hora >= 5 && hora <= 12){
    boaa.innerHTML = `<p><strong>Bom dia, ${nome}!</strong></p>`
    img.src = 'imagens/manha.png'
    document.body.style.background = '#87CEEB'
} else if ( hora > 12 && hora <= 18){
    boaa.innerHTML = `<p><strong>Boa tarde, ${nome}!</strong></p>`
    img.src = 'imagens/tarde.png'
    document.body.style.background = '#ffb120'
} else if (hora > 18 && hora < 24){
    boaa.innerHTML = `<p><strong>Boa Noite, ${nome}!</strong></p>`
    img.src = 'imagens/noite.png'
    document.body.style.background = '#000080'
} else {
    boaa.innerHTML = `<p><strong>Boa madrugada, ${nome}!</strong></p>`
    img.src = 'imagens/madrugada.png'
    document.body.style.background = '#483D8B'   
}
}

