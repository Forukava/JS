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
      break;
    case 'Drop':
      break;
    case 'Steal':
      break;
  }

  
}

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