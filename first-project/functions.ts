function add(n1: number, n2: number){
    return n1+n2
}

function printResult(result : number): void{
  console.log('Result: ',result)
  
}

function addHandle(n1: number, n2:number,cb: (num: number)=>void){
  const result = n1+n2;
  cb(result);
}

printResult(add(5,3))

let combineValues : (a: number , b: number)=> number;

combineValues = add;
// combineValues = 5;
// combineValues =  printResult

console.log(combineValues(5,8));

function sayHi(): undefined {
  // ...
}

addHandle(20,40,(result)=>{
 console.log(result);
})

