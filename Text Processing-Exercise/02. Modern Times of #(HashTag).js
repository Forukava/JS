function solve(input){
let text = input.split(' ')
.forEach(text => {
    if(text.includes('#')){ 
    console.log(`${text.slice(1)}`)
    }
});
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia')