function solve(arr1, arr2){
    let store = {};
    let available = restock(arr1, {})
    let productDel = restock(arr2, available)
    for(let product of Object.keys(productDel)){
        console.log(`${product} => ${productDel[product]}`)
    }


    function restock(arr,obj){
for (let i = 0; i < arr.length; i+=2) {
    const product = arr[i];
    const quantity = Number(arr[i+1]);
    
   
    if(!obj.hasOwnProperty(product)){
        obj[product] = quantity;
    }else{
        obj[product] += quantity;
    }
}
return obj
}

}
solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)    