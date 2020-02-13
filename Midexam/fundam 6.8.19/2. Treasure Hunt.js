function solve(input){
let loot = input.shift().split('|') 

for (const el of input) {
  if(el === "Yohoho!"){
    break;
  }
  let tokens = el.split(' ')
  let command = tokens.shift()
  console.log(command)
  
  switch(command){
    case 'Loot':
      for (const el of tokens) {
        if(loot.indexOf(el)=== -1){
           loot.unshift(el)
        }
      }
      break;
    case 'Drop':
      let ind = Number(tokens[0])
      if(ind<0 || ind>=loot.length){
        break;
      }
      let el = loot.splice(ind,1)[0]
      loot.push(el)
      break;
    case 'Steal':
      break;
  } 

}
return loot
}
solve([
    'Gold|Silver|Bronze|Medallion|Cup',
    'Loot Wood Gold Coins',
    'Loot Silver Pistol',
    'Drop 3',
    'Steal 3',
    'Yohoho!'
  ]
  )