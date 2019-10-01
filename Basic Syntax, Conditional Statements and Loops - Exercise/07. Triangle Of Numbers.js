function tri(f){
    for (let i = 1; i <=f; i++) {
        let output =''
    
        for (let y = 1; y <=i; y++) {
        output += i+ ' '
        }
        console.log(output)
    }
    } 
solve(5, 10)