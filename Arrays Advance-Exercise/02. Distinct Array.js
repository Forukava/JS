function dist(arr){
    let arr1 = []
for (let i = 0; i < arr.length; i++) {
    if(!arr1.includes(arr[i])){
        arr1.push(arr[i])
}
}
console.log(arr1.join(' '))
}
dist([7, 8, 9, 7, 2, 3, 4, 1, 2])