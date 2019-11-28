function solve(one,two, three, four, five){
    const obj = {name: one, area: two, population: three, country: four, postCode: five}

    for(let property in obj){
        console.log(`${property} -> ${obj[property]}`)
    }
}
solve("Sofia"," 492", "1238438", "Bulgaria", "1000")

