function solve(input){
    let username = input[0];
    let reverseUserName = '';
    for (let i = username.length-1; i >= 0; i--) {
        reverseUserName += username[i];
    }
    for (let index = 1; index < input.length; index++) {
        if(index===4){
            console.log(`User ${username} blocked!`)
            break;
        }
        if(input[index] !== reverseUserName){
            console.log('Incorrect password. Try again.');
        }else{
            console.log(`User ${username} logged in.`);
            break;
        }
        
    }
 } 
solve(5, 10)