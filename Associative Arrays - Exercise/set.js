let arr = [5,99,1,102];
let pet = new Set ([1,4,5,6,8,54])

arr.forEach(el => pet.add(el))

Array.from(pet.keys())
.forEach(element => console.log(element))