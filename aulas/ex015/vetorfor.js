/*let valor = [1,2,6,3,5,9,7,8,9]
valor.sort()
console.log(valor)
for (let pos = 0; pos < valor.length; pos++){
    console.log(`A posiçao ${pos} tem o número ${valor[pos]}`)
} */
let valor = [1,2,6,3,5,9,7,8,9]
valor.sort()
for(let pos in valor){
    console.log(`A posiçao ${pos} tem o número ${valor[pos]}`)
}
