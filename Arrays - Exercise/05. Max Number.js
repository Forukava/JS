function solve(one){
    let two =  [];
    for (let i = 0; i < one.length; i++) {
    let currentElement = one[i];
    let istwo =  true;
    for (let j = i + 1; j < one.length; j++) {
      let nextEl = one[j]
    
      if(currentElement<= nextEl){
        istwo = false;
        break;
      }
    }
    if(istwo){
      two.push(currentElement);
      }
    }
    console.log(two.join(' '));
    }