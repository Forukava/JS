function solve(input){
    let journal = new Map();

    input.forEach(element => {
        let token = element.split(' ');
        let key = token.shift()
        let value = token.map(Number);

        if(journal.has(key)){
            let oldValue = journal.get(key)
            journal.set(key, oldValue.concat(value));
        }else{
            journal.set(key, value)
        }
    })
            let sorted = Array.from(journal.entries())
    .sort((a,b) => average(a[1]) - average(b[1]))
        
    sorted.forEach(element => {console.log(`${element[0]}: ${element[1].join(', ')}`);
})
function average(arr){
    let sum = 0
    arr.forEach(element => sum += element)
    return sum/arr.length
}   
}    


   


solve([ 'Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6' ])
