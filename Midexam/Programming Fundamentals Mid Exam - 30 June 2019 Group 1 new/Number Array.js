function solve(arr){
    let numbers = arr.shift().split(' ').map(Number);   
for (const iterator of arr) {
    console.log(iterator)
}






console.log(numbers)
}

solve([ '1 2 3 4 5', 'Switch 4', 'Change 0 -3', 'Sum Negative', 'End' ])