// const ADMIN = 0


// enum Role  {ADMIN = 'ADMIN', READ_ONLY= 'READ_ONLY', AUTHOR='AUTHOR'}
// const person : {
//     name : string;
//     age: number;
//     hobbies: string[];
//     role: any;
// }= {
//      name : 'Reshma',
//      age : 23,
//      hobbies: ['sports','cookings'],
//      role: Role.AUTHOR,
     
// };
// let sportActivities :any[];
// sportActivities = ['abc',1]
// // person.role.push('admin');
// // person.role[1] = 10

// console.log(person.name)
// for(const hobby of person.hobbies){
//     console.log(hobby.toUpperCase());
// }

// if(person.role === Role.AUTHOR){
//     console.log('you are admin',person.role, Role.AUTHOR)
// }

type Combinable = number | string;
type ConversionDesr = 'as-number' | 'as-text';

function combine (
    input1: Combinable,
    input2: Combinable, 
    resultConversion: ConversionDesr
    ){
    let result ;
    if(typeof input1 == 'number' && typeof input2 == 'number' || resultConversion == 'as-number'){
      result = +input1 + +input2;
    }else{
      result = input1.toString()+input2.toString();
    }
    // if(resultConversion == 'as-number'){
    //     return +result;
    // }else{
    //     return result.toString();
    // }
    return result
}

const combineAges = combine(20,30,'as-number')
console.log(combineAges)
const combineStringAges = combine('20','30','as-number')
console.log(combineStringAges)
const combineNames = combine('reshma','satpute','as-text')
console.log(combineNames)