function solve(input) {
    let steps = Number(input.shift())
    let lengthSteps = Number(input.shift())
    let needDistance = Number(input.shift())*100
    

    let result = 0;
    for (let i = 1; i <= steps; i++) {
        if(i % 5 == 0){
            let fift = lengthSteps * 0.7
            result += fift
        }else{
            let normal = lengthSteps
            result+=normal
        }
    }
    if(result>needDistance){
        console.log(`You travelled ${(result.toFixed(2))}% of the distance!`)
    }else{
        let fre = (result / needDistance)*100
        console.log(`You travelled ${(fre.toFixed(2))}% of the distance!`)
    }
}
solve([ '5000', '7.5', '500' ])