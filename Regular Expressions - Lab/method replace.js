let text = 'Peter: 123 Mark: 456'
let replacemant = '999'
let regex = /\d{3}/g
let result = text.replace(regex, replacemant)
console.log(result)