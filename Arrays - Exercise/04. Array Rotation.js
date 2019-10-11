function solve(one, two){
    while(two>0){
      let fEl = one[0];
      for(let i = 0; i < one.length; i++){
        one[i] = one[i+1]
      }
      one[one.length -1] = fEl;
      two--;
    }
    console.log(one.join(' '))
    }