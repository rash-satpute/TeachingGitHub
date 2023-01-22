function add (n1: number,n2:number,showResult:boolean,phrase: string){
    console.log(typeof n1);
    console.log(typeof n2);
    // if(typeof n1 !== 'number' && typeof n2 !== 'number'){
    //     throw Error('Incorrect Numput')
    // }
    const result = n1+n2
    if(showResult){
        console.log(phrase+ result);
    }else{
        return result;
    }
}
const number1 = 3;
const number2 = 3.4;
const printResult = true;
const resultPhrase = 'Result is';
add(number1,number2, printResult, resultPhrase);
