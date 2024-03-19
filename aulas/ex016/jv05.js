// recursividade 
function fatorial(n){
     if (n == 1){
        return 1
     } else {
        return n*fatorial(n-1)
     }
}
console.log(fatorial(1))

/*

5! : 5x4x3x2x1
5! : 5x4!
x! : x * (x-1)!
1! : 1

*/