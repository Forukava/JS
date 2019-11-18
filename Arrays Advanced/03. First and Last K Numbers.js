function solve(arr){
let k = arr.shift()
let result = arr.slice(0, k)
console.log(result.join(' '))
let length = arr.length
result = arr.slice(length -k)
console.log(result.join(' '))
} 


solve([2, 7, 8, 9])