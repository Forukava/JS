function solve(arr){
newarr = []
    for (let i = 0; i < arr.length; i++) {
    current = arr[i]
    if(current<0){
    newarr.unshift(current)
    }else{
    newarr.push(current)
    }
}
console.log(newarr.join('\n'))
}

solve[7, -2, 8, 9]