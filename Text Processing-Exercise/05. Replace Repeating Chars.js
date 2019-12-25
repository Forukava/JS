function solve(input){
let str = '';

for (let i = 0; i < input.length; i++) {
    let last  = str.slice(-1)
    let current = input[i]

    if(last !== current){
        str += current
    }
}console.log(str)
}
solve('aaaaabbbbbcdddeeeedssaa')