function calcular (){
let inicio = window.document.getElementById('iinicio')
let fim = window.document.getElementById('ifim')
let contar = window.document.getElementById('icontar')
let resultado = window.document.getElementById('result')


    if (inicio.value.length == 0 || fim.value.length == 0 || contar == 0){
    resultado.innerHTML = 'Impossível Contar'
    window.alert('[ERRO] Coloque uma contagem válida!')
    } else{
        resultado.innerHTML = "Contando: <br> "
        let ini = Number(inicio.value)
        let f = Number(fim.value)
        let cont = Number(contar.value)
            if (cont <=0 ){
                window.alert('Passo inválido!')
                alert('Considerando Passo 1')
                cont = 1
            }
                if (ini < f){
                         // contagem crescente
                         for (let c = ini; c <= f; c+= cont){
                           resultado.innerHTML += ` ${c} \u{1F449}`
                        } 
                       } else {
                          // contagem regressiva 
                          for(let c = ini; c >= f; c-= cont){
                          resultado.innerHTML += ` ${c} \u{1F449}`
                          } 
                          }
        resultado.innerHTML += '\u{1F3C1}' 
    }

}   