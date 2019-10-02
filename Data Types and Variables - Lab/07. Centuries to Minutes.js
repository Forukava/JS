function solve(dist, pass, price){
let needFuel = (dist/100) * 7;
needFuel += pass*0.100;
let total = needFuel*price;
console.log(`Needed money for that trip is ${total}lv.`)
}
solve(260, 9, 2.49)