function calcular (){
let inicio = window.document.getElementById('iinicio')
let fim = window.document.getElementById('ifim')
let contar = window.document.getElementById('icontar')
let resultado = window.document.getElementById('result')

resultado.innerHTML = `Vamos contar`
if (inicio.value.length == 0 || fim.value.length == 0 || contar == 0){
    window.alert('[ERRO] Coloque uma contagem válida!')
} else{
    alert('tudo ok')
}
for (inicio; fim; contar){
    
}


}   