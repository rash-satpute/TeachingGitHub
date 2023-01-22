type Admin =  {
    name : string;
    privillege: string[];
}

type Employee = {
    name: string,
    startDate: Date
}

// interface ElevatedEmployee extends Employee, Admin {}
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privillege: ['crate-server'],
    startDate: new Date()
}

type Combinable = string | number;

type Numeric = number | boolean

type Universal = Combinable & Numeric;

function add(a: number, b:number) : number
function add(a: string, b:string) : string
function add(a: string, b:number) : string
function add(a: number, b:string) : string
function add(a: Combinable, b:Combinable){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString()+ b.toString()
    }
    return a + b;
}

const result = add('reshma','satpute')
result.split(' ')

const fetchUserData = {
    id: 'u1',
    name: 'max',
    job:{title:'CEO',description:'my own compnay'}
}
console.log(fetchUserData?.job?.title)

const userInput = null
const storedData = userInput ?? 'Default Value'
console.log(storedData)
// type UnknownEmployee = Employee | Admin;

// function printEmployeInformation(emp:UnknownEmployee){
//     console.log('Name '+ emp.name)
//     if('privillege' in emp){
//         console.log('Privillege '+ emp.privillege)

//     }
//     if('startDate' in emp){
//         console.log('start date '+ emp.startDate)

//     }

// }

// printEmployeInformation({name: 'Reshma ',privillege: ['data']});


// class Car {
//     drive(){
//         console.log('Driving ......')
//     }
// }

// class Truck {
//     drive(){
//         console.log('Driving a truck .........')
//     }
//     loadingCargo(amount:number){
//         console.log('Loading cargo ......'+amount)
//     }
// }

// type Vehical = Car | Truck

// const v1 = new Car();
// const v2 = new Truck();

// function useVehical(vehical: Vehical){
//     vehical.drive()
//     // if('loadingCargo' in vehical){
//     //     vehical.loadingCargo(10000)
//     // }
//     if(vehical instanceof Truck){
//         vehical.loadingCargo(10000)
//     }

// }

// useVehical(v1)
// useVehical(v2)

// interface Bird {
//     type : 'bird'
//     flyingSpeed: number
// }

// interface Horse {
//     type : 'horse'
//     runningSpeed : number
// }


// type Animal = Bird | Horse

// function moveAnimal(animal : Animal){
//     // if('flyingSpeed' in animal){
//     //     console.log('Moving with spped'+animal)
//     // }

//     let speed;

//     switch(animal.type){
//         case 'bird' : 
//             speed = animal.flyingSpeed
//             break
//         case 'horse':
//             speed = animal.runningSpeed
        
//     }

//     console.log('Moving with spped '+speed);

// }

// moveAnimal({type:'bird',flyingSpeed:1999})



// // const paragraph = document.querySelector('p')


// // const userInputElement = <HTMLInputElement> document.getElementById('user-input')!;
// // const userInputElement =  document.getElementById('user-input') as HTMLInputElement;
// const userInputElement =  document.getElementById('user-input');
// if(userInputElement){
//     (userInputElement as HTMLInputElement).value = 'Hii! there!'

// }

// interface ErrorContainer {
//     [prop:string]:string
// }

// const errorBag : ErrorContainer = {
//     email: 'Not a valid email',
//     userName: 'Must start with the capital letters'
// }




