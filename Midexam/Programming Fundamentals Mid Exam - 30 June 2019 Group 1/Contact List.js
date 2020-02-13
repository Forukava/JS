function solve(arr){
let names = arr.shift().split(' ')
console.log(names)
for (const iterator of arr) {
    let [command,index] = iterator.split(' ')
     console.log(index)
}
}
solve([
    'Alisson Bellamy Candace Tristan',
    'Remove 3',
    'Add Bellamy 2',
    'Print Normal'
  ])
