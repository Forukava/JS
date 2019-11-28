function solve(arr){
    
  let res = arr
  .filter((num, i) =>i % 2 == 1)
  .map(x =>x * 2)
  .reverse()
  .join(' ')
console.log(res)
  } 
  
  solve([3, 0, 10, 4, 7, 3])