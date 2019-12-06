function solve(arr){
    let data = {}
        for (let row of arr) {
            const [town, latitude, longitude] = row.split(' | ')
            console.log(town, latitude, longitude)
        }
       
    
}
solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)