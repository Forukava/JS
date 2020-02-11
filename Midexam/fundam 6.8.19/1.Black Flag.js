function solve(input){
    let day = Number(input.shift());
    let cash = Number(input.shift());
    let purpose = Number(input.shift());

    let result = 0
    for (let i = 1; i <= day; i++) {
        result += cash
        if(i%3===0){
            result+=cash*0.5
        }
        if(i%5===0){
            result-=result*0.3
        }
    }

    if(result >= purpose){
        console.log(`Ahoy! ${result.toFixed(2)} plunder gained.`)
    }else{
        let blia = (result/purpose)*100
        console.log(`Collected only ${blia.toFixed(2)}% of the plunder.`)
    }
}
solve(['5','40','100'])