function concat(no, yes, ja){
    let sum = no.replace('_', yes)
    let result = sum === ja ? 'Matched' : 'Not Matched'
console.log(result)
}
concat('Str_ng', 'i', 'String')