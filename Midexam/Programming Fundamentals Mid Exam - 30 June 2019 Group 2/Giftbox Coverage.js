function gift(input){
let side = Number(input.shift())
let sheets = Number(input.shift())
let area = Number(input.shift())
let allSide = (side * side) * 6

let result = 0;
for (let i = 1; i <= sheets; i++) {
    const element = i
    if(i%3===0){
        let three = area * 0.25
        result+=three
    }else{
        let normal = area
        result+=normal
    }
}
if(result>allSide){
    let end = (result/allSide) *100
    console.log(`You can cover ${end.toFixed(2)}% of the box.`)
}else{
    let end1 = (result/allSide)*100
    console.log(`You can cover ${end1.toFixed(2)}% of the box.`)
}
}
gift([ '5', '30', '4' ])
gift([ '2.5', '32', '4.25' ])