function solve(input){
let str = input.shift()
let cmd = input.shift().split(' ')

while(cmd[0] != 'End'){
  switch (cmd[0]){
    case 'Translate':

    break;
    case 'Includes':

    break;
    case 'Start':

    break;
    case 'Lowercase':

    break;
    case 'Findindex':

    break;
    case 'Remove':
    
    break;
  }
  cmd = input.shift().split(' ')
}

}
solve([
    '//Thi5 I5 MY 5trING!//',
    'Translate 5 s',
    'Includes string',
    'Start //This',
    'Lowercase',
    'FindIndex i',
    'Remove 0 10',
    'End'
  ])
