function solve(input){
    let str = '';
for (let i = 0; i < input.length; i++) {
    if(str.slice(-1) !== input[i]){
        str += input[i]
        console.log(str)
    }
    
}

}
solve('aaaaabbbbbcdddeeeedssaa')