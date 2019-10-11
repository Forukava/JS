function solve(orig){

  let mod = [];

  for (let i = 0; i < orig.length; i++) {
    let currentEl = orig[i];

    if(currentEl % 2 === 0){
      mod.push(currentEl + i)
    }else{
      mod.push(currentEl - i)
    }
  }
 console.log(mod)
  let origSum = 0;
  let modSum = 0;

  for (const index in orig) {
    let fEl = orig[index];
    let sEl = mod[index]
   
    origSum += fEl;
    modSum += sEl;
    }
  console.log(origSum);
  console.log(modSum);
}