function solve(first, all){
    let ord = first.toLowerCase()
    let ext = all.toLowerCase()
let word = ord.split(' ')

let text = ext.split(' ')

if(text.includes(`${word}`)){
    console.log(word.toString())
}else{
    console.log(`${word} not found!`)
}
}
solve('javascript',
'JavaScript is the best programming language')