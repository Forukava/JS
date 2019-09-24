function solve(num, type, day){
    if(type == "Students" && day == 'Friday'){
        let sum = num * 8.45
        console.log(`Total price: ${sum}`)
    }else if(type == "Students" && day == 'Saturday'){
        let sum = num * 9.80
        console.log(`Total price: ${sum}`)
    }else if(type == "Students" && day == 'Sunday'){
        let sum = num * 10.46
    }if (num>30){
        console.log(`Total price: ${sum}`)
        }else{
            sum = (num * 10.46)*0.85
        console.log(`Total price: ${sum}`)
        }
    if(type == "Business" && day == 'Friday'){
            let sum = num * 10.90
            console.log(`Total price: ${sum}`)
        }else if(type == "Business" && day == 'Saturday'){
            let sum = num * 15.60
            console.log(`Total price: ${sum}`)
        }else if(type == "Business" && day == 'Sunday'){
            let sum = num * 16.00
        }if (num>100){
            console.log(`Total price: ${sum}`)
            }else{
                sum = (num * 10.46)*0.90
            console.log(`Total price: ${sum}`)
}

solve(40, "Business", "Sunday")