function solve(num){
let number = num.toString();
let sum = 0;
for (let i = 0; i < number.length; i++) {
let digit = Number(number[i]);
sum += digit    
}
console.log(sum)
}
solve(245678)