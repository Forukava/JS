function solve(input){
let movies = [];

for (let command of input) {
    let tokens = command.split(' ');

    if(tokens[0] === 'addMovie'){
        let filmName = tokens.slice(1).join(' ')
        movies.push({name: filmName})
    } 
}
console.log(movies)
}
solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
  ])
  