function solve(input){
let tool = input.shift().split('|')

for (const element of input) {
    if(element === "Yohoho!"){
        break;
    }
    let boo = element.split(' ')
    //console.log(boo)
    console.log(element)
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