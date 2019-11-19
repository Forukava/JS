function solve(arr){
    
  let res = arr
  .filter(x => x % 2 !=0)
  .map(x =>x * 2)
  .reverse()
console.log(res.join(' '))
  } 
  
  solve([10,15,20,25])