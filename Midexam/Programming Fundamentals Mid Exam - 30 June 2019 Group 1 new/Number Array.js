function solve(arr){
    let numbers = arr.shift().split(' ').map(Number);   
for (const iterator of arr) {
    let[command,index,value] = iterator.split(' ')
    console.log(command, index, value)
}






console.log(numbers)
}

solve([ '1 2 3 4 5', 'Switch 4', 'Change 0 -3', 'Sum Negative', 'End' ])