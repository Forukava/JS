function solve(arr){
   let wagons = arr[0].split(' ').map(Number)
    let maxCapacity = +(arr[1])
    let commands = arr.slice(2)
for (const cmd of commands) {
   
    let tokens = cmd.split(' ')
    if(tokens.length === 2){
        wagons.push(+(tokens[1]))
    }else{
        for (let passengers of wagons) {
            let availableCapacity = maxCapacity - passengers;
            
        }
    }
}

console.log(wagons)
console.log(maxCapacity)
console.log(commands)

}
solve(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])