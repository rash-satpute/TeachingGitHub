var userInput;
var userName;
userInput = 4;
userInput = 'reshma';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, code: code };
}
var result = generateError('Error occoured!', 404);
console.log(result);
