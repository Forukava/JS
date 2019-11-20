function solve(arr){
let res = arr.filter(i => i<20)
.reverse()
.join(' ')
console.log(res)
}


solve([30,15,50,5])