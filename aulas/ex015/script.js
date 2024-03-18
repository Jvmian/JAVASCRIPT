/*
Um vetor é uma variavel com varios elementos 
cada elemento tem sua chave e seu valor
*/
let num = [5,8,4,9,0]
num[5]=3 // na posiçao 5 colocar 3, não foi por causa do sort
num.push(1) // cria uma variavel apos a ultima 
num.length // quantidade de elementos 
num.sort()// deixa crescente  ordem importa
console.log(`Nosso valor é ${num}`)
console.log(`Temos ${num.length} números`)
console.log(`A terceira posição é ${num[2]}`)
let pos = num.indexOf(5)
if(pos == -1){
    console.log("O número não foi encontrado")
}else{
    console.log(`O valor 5 está na posição ${pos}`)
}

