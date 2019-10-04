function solve(num1, symbol, num2){
    if(symbol == '+'){
        let sum = num1+num2;
        console.log(sum.toFixed(2))
    }else if(symbol == '-'){
        let sum = num1-num2;
        console.log(sum.toFixed(2))
    }else if(symbol == '*'){
        let sum = num1*num2;
        console.log(sum.toFixed(2))
    }else if(symbol == '/'){
        let sum = num1/num2;
        console.log(sum.toFixed(2))
    }
}
solve(5,
    '/',
    10)