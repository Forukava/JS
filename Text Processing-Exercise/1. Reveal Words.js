function solve(words, text) {
let sepWords = words.split(', ')
text.split(' ')
.forEach(word => {
  let pipi = '*'.repeat(word.length)
  if(word === pipi ){
    text=text.replace(word, sepWords.find((W) => W.length === pipi.length))
  }
});
console.log(text)
}
solve('great',
'softuni is ***** place for learning new programming languages')