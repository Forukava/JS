function solve(input){

    let steps = input.shift()
    let distance = input.shift()
    let fullDistance = input.shift()
    let treeDist = steps/5
    let allSteps = (treeDist * (distance * 0.7)) + ((steps - treeDist)* distance)
    let out = allSteps/fullDistance

        console.log(`You travelled ${out.toFixed(2)}% of the distance!`)
}
solve([100, 2, 1])