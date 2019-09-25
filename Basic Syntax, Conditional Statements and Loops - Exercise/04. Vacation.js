function solve(num, type, day){
    if(type == "Students" && day == 'Friday'){
        let sum = num * 8.45
        if (num<30){
            console.log(`Total price: ${sum.toFixed(2)}`)
            }else{
            sum *= 0.85
            console.log(`Total price: ${sum.toFixed(2)}`)
    }
}
    if(type == "Students" && day == 'Saturday'){
        let sum = num * 9.80
        if (num<30){
            console.log(`Total price: ${sum.toFixed(2)}`)
            }else{
            sum *= 0.85
            console.log(`Total price: ${sum.toFixed(2)}`)
    }
}
if(type == "Students" && day == 'Sunday'){
        let sum = num * 10.46;
        if (num<30){
            console.log(`Total price: ${sum.toFixed(2)}`)
            }else{
            sum *= 0.85
            console.log(`Total price: ${sum.toFixed(2)}`)
    }
}
if(type == "Business" && day == 'Friday'){
            let sum = num * 10.90
            if (num<100){
                console.log(`Total price: ${sum.toFixed(2)}`)
                }else{
                sum *= 0.90
                console.log(`Total price: ${sum.toFixed(2)}`)
        }
    }
    if(type == "Business" && day == 'Saturday'){
            let sum = num * 15.60
            if (num<100){
                console.log(`Total price: ${sum.toFixed(2)}`)
                }else{
                sum *= 0.90
                console.log(`Total price: ${sum.toFixed(2)}`)
        }
    }
    if(type == "Business" && day == 'Sunday'){
            let sum = num * 16.00;
            if (num<100){
                console.log(`Total price: ${sum.toFixed(2)}`)
                }else{
                sum *= 0.90
                console.log(`Total price: ${sum.toFixed(2)}`)
        }
    }
    if(type == "Regular" && day == 'Friday'){
        let sum = num * 15
        if (num<=9 || num>=19){
            console.log(`Total price: ${sum.toFixed(2)}`)
            }else{
            sum *= 0.95
            console.log(`Total price: ${sum.toFixed(2)}`)
    }
}
if(type == "Regular" && day == 'Saturday'){
        let sum = num * 20
        if (num<=9 || num>=19){
            console.log(`Total price: ${sum.toFixed(2)}`)
            }else{
            sum *= 0.95
            console.log(`Total price: ${sum.toFixed(2)}`)
    }
}
if(type == "Regular" && day == 'Sunday'){
        let sum = num * 22.50;
        if (num<=9 || num>=19){
            console.log(`Total price: ${sum.toFixed(2)}`)
            }else{
            sum *= 0.95
            console.log(`Total price: ${sum.toFixed(2)}`)
    }
}
}
solve(40,
    "Regular",
    "Saturday")