function solve(input){
let name = input.lastIndexOf('\\')
let fullName = input.substring(name +1)
let fileName = fullName.split('.')
let ffName = fileName[0]
let nameFile = fileName[1]
console.log(`File name: ${ffName}`)
console.log(`File extension: ${nameFile}`)
}
solve('C:\\Internal\\training-internal\\Template.pptx')