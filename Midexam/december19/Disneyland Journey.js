function disney(input){
    let journeyCost = input.shift()
    let needMonth = input.shift()
   
    let sum = []
    
    for (let i = 1; i <= needMonth; i++) {
        sum.push(i)
        if(sum.includes(3)){
            let three = (journeyCost * 2 * 0.25) * 0.16
           totalThree = (journeyCost * 0.25) - three
           var finalThree = totalThree + (journeyCost * 2 * 0.25) 
        }
        if(sum.includes(4)){
            var four = (finalThree * 0.25) + journeyCost * 0.25
        }
        var finish = finalThree+four
        if(finish > journeyCost){
            let end = finish - journeyCost
            console.log(`Bravo! You can go to Disneyland and you will have ${end}lv. for souvenirs.`)
        }else if(journeyCost>finish){
            let end1 = journeyCost - finish
            console.log(`Sorry. You need ${end1}lv. more.`)
        }
    }
}

disney([1000, 4])