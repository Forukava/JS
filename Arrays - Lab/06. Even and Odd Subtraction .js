function solve(arr){
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
        let even = 0;
    
        for(let num of arr)
        if(num % 2 === 0){
            even += num  
        }
        console.log(even)
    }

solve([1,2,3,4,5,6])