function solve(input){
let days = Number(input.shift());
let people = Number(input.shift());
let gropE = Number(input.shift());
let waterPerPerson = Number(input.shift());
let foodPerPerson =  Number(input.shift())

let water = days * people * waterPerPerson
let food = days * people * foodPerPerson

 let consumedEnergy = input.map(Number)
 
 for (let day = 1; day <= days; day++){
     let energy = consumedEnergy.shift()
     gropE -= energy
    if(gropE <= 0){
        break;
    }
    if(day % 2 === 0){
        gropE *= 1.05;
        water *= 0.7
    }
    if(day % 3 === 0){
        gropE *= 1.1;
        food -= food/people
    }
 }
 if(gropE<=0){
     console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`)
 }else{
    console.log(`You are ready for the quest. You will be left with - ${gropE.toFixed(2)} energy!`)
 }
}
solve([
    '10',     '7',      '5035.5',
    '11.3',   '7.2',    '942.3',
    '500.57', '520.68', '540.87',
    '505.99', '630.3',  '784.20',
    '321.21', '456.8',  '330',''])
