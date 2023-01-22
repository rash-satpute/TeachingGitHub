Code goes here!
// const age  =30
// if(age > 20){
//  var isAge = true
// }

// console.log(isAge)

// const add = (a:number,b:number = 2) =>{
//     return a+b
// }

// console.log(add(2,3))

// const printOutput : (a: number  | string) => void = (output : string | number)=>{
//  console.log(output)
// }

// printOutput(add(2));

// const button = document.querySelector('button');

// if(button){
//     button.addEventListener('click', event => console.log(event));
// }

const hobbies = ['cricket','hiking'];

const activeHobbies = ['travelling'];

activeHobbies.push(...hobbies);

const person = {
    firstName:'Max',
    age: '24'
}

const copiedPerson = {...person}


const add = (...numbers: number[])=>{
    return numbers.reduce((currResult,currValue)=>{
        return currResult+currValue
    },0)
}

const addedNumber = add(1,2,3,4,2);

console.log(addedNumber);

const [hobby1,hobby2, ...remainingHobbies] = hobbies

console.log(hobbies,hobby1,hobby2)

const {firstName:username,age} = person

console.log(username,age)




