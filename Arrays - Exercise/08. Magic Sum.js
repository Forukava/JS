function solve(array, magic){
    for (let i = 0; i < array.length; i++) {
     let currentEl = array[i];
  
      for (let j = i + 1; j < array.length; j++) {
       let nextEl = array[j];  
       if(currentEl+nextEl===magic){
         console.log(`${currentEl} ${nextEl}`)
       }
      }
    }
  }