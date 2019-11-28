function solve(firstName,lastName, age){
    const obj = {firstName: firstName, lastName: lastName, age: age}

    for(let prop in obj){
        console.log(`${prop}: ${obj[prop]}`)
    }
}
solve("Peter", 
"Pan",
"20"
)