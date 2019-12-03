function solve(arr){
let emplo = [];
    for (let personName of arr) {
        let personObject = {
            name: personName,
            personalNumber: personName.length
        };
        emplo.push(personObject);
    }
    for (let employee of emplo) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`)
    }
}

solve(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal']);