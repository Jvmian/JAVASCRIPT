function calcular (){
let num = window.document.getElementById('inum')
let resultado = window.document.getElementById('result')


    if (num.value.length == 0){
    resultado.innerHTML = 'Impossível Calcular'
    window.alert('[ERRO] Coloque um número válido!')
    } else{
        let numero = Number(num.value)
        resultado.innerHTML = ''
                if (numero > 0){
                         for (let c = 1; c <= 10; c++){
                            let  item = document.creatElement('option')
                            item.text = `${numero} X ${c} = ${numero*c}`
                            item.value = `result${c}`
                            resultado.appendChild(item)
                        } 
                       } 
       // resultado.innerHTML += '\u{1F3C1}' 
    }

}
/* 
let n = number(num.value)
let c = 1
result.innerHTML = ''
while (c <= 10){
    let  item = document.createlement('option')
    item.text = `${numero} X ${c} = ${numero*c}`
    resultado.appendChild(item)
    c++
}




*/   