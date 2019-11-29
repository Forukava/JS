function solve(obj){
    obj = JSON.parse(obj)
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            console.log(`${key}: ${value}`)
        }
    }
}
solve('{"name": "George", "age": 40, "town": "Sofia"}')