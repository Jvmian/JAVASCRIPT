function verificar(){
    //window.alert('chorou pai')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('inasc')
    var resultado = window.document.getElementById('resultado')
    if (fano.value.length == 0 || Number(fano.value) > ano ){
        window.alert('ERRO!!! Verifique os dados e tente novamente!')
    } else{
        var fsex = window.document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = ' Homem'
            if (idade >= 0 && idade < 11){
              img.setAttribute('src', 'imagens/menino.png')
            } else if (idade < 21){
                img.setAttribute('src', 'imagens/jovem.png')
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/adulto.png')
            } else {
                img.setAttribute('src', 'imagens/idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'a Mulher'
            if (idade >= 0 && idade < 11){
                img.setAttribute('src', 'imagens/menina.png')
            } else if (idade < 21){
                img.setAttribute('src', 'imagens/jovemfem.png')
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/adulta.png')
            } else {
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        //resultado.style.textAlign = 'right'

        resultado.innerHTML = `Verificamos um${genero} com ${idade} anos.`
        resultado.appendChild(img) 
    }
}