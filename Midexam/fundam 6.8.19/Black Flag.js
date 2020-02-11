function solve(input){
let days = Number(input.shift())
let plunder = Number(input.shift())
let expect = Number(input.shift())

let total = 0
for (let day = 1; day <= days; day++) {
    total+=plunder
    if (day%3===0){
        total += plunder*0.5;
    }
    if(day%5===0){
        total -= total * 0.3
    }
}
    if(total >= expect){
        return `Ahoy! ${total.toFixed(2)} plunder gained.`
    }else{
        let percentage = total / expect * 100;
        return `Collected only ${percentage.toFixed(2)}% of the plunder.`
    }
}
solve([ '5', '40', '100' ])
