function solve(text, key){
let counter = 0;
let arr = text.split(' ')
for (const word of arr) {
    if(word == key){
        counter++
    }
}
console.log(counter)
}
solve("This is a word and it also is a sentence", "is")