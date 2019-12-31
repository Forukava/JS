let regexp = new RegExp('[a-z]+', 'g');
let text = 'This ?? is A wOrD';
let arr = text.match(regexp)
console.log(regexp.exec(text))
console.log(regexp.exec(text))
console.log(regexp.exec(text))