function tabuada(){
let num = window.document.getElementById('inum')
let resultado = window.document.getElementById('result')
let testando = window.document.getElementById('teste')
    if (num.value.length == 0){
    testando.innerHTML = 'Impossível Calcular'
    window.alert('[ERRO] Coloque um número válido!')
    } else{
        let numero = Number(num.value)
                if (numero > 0 || numero < 0){
                         resultado.innerHTML = ''
                         for (let c = 1; c <= 10; c++){
                            let item = document.createElement('option')
                            item.text = `${numero} X ${c} = ${numero*c}`
                            //item.value = `result${c}`
                            resultado.appendChild(item)
                        } 
                       } 
       // resultado.innerHTML += '\u{1F3C1}' 
    }

}
/* 
let n = number(num.value)
let c = 1
resultado.innerHTML = ''
while (c <= 10){
    let  item = document.createElement('option')
    item.text = `${numero} X ${c} = ${numero*c}`
    resultado.appendChild(item)
    c++
}




*/   