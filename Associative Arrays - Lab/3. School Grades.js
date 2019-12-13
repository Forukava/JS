function solve(input){
    let journal = new Map();

    input.forEach(element => {
        let token = element.split(' ');
        let key = token[0]
        let value = token.map(Number);

        if(journal.has(key)){
            let oldValue = journal.get(key)
            journal.set(key, oldValue.concat(value));
        }else{
            journal.set(key, value)
        }
    });
}
solve([ 'Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6' ])
