function solve(input){
    let loot = input.shift().split('|')
    
    for (const element of input) {
        if(element === 'Yohoho!'){
            break;
        }
       let tokens = element.split(' ') 
        let command = tokens.shift()
        
        switch (command){
            case "Loot":
                for(let item of tokens){
                    if(loot.indexOf(item) === -1){
                        loot.unshift(item)
                    }
                }
                break;
            case "Drop":
                break;
            case "Steal":
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
  ])
