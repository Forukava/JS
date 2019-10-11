function solve(one, two){
    let third = [];
    let length = one.length;
    
    for (let i = 0; i < length; i++) {
      let fEl = one[i];
      let sEl = two[i];
      
      if(i % 2 === 0){
        third.push(Number(fEl) + Number(sEl));
      }else{
        third.push(fEl + sEl);
     
      }
    }
    console.log(third.join(' - '));
  }