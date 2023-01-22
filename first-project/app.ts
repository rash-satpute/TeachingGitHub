let userInput : unknown;
let userName : string;

userInput = 4;
userInput = 'reshma'
if(typeof userInput === 'string'){
    userName = userInput
}

function generateError (message : string, code: number): never{
    throw {message: message, code:code}
}
const result  = generateError('Error occoured!', 404)

console.log(result);