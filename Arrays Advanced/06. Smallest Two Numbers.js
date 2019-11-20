function solve(arr){
let res = arr.sort((a,b) => {return a-b})
res.splice(2)

console.log(res.join(' '))
}


solve([30,15,50,5])