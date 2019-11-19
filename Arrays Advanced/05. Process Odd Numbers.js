function solve(arr){
    
    const arr1 = arr.reverse()
    for (let i = 0; i < arr1.length; i++) {
    let current = arr1[i]
    if(current %2 !== 0){
      current *= 2
      console.log(current.toString())
}
    }   
    } 
    
    solve([3, 0, 10, 4, 7, 3])