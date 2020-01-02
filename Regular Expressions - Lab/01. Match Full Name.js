function solve(input){
let regexp = /[A-Z][a-z]+ [A-Z][a-z]+/g
let arr = input.match(regexp)
console.log(arr.join(' '))
}
solve('ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan	Ivanov')