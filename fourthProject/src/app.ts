function Logger(logString:string){
    return function(constructor:Function){
        console.log('Logging .....',logString)
        console.log(constructor)
    }
   
}

function WithTemplate(template:string,hookId:string){
    return function(constructor:any){
        console.log('Rendering template')
        const hookEl = document.getElementById(hookId)
        const p = new constructor()
        if(hookEl){
            hookEl.innerHTML = template
            hookEl.querySelector('h1')!.textContent = p.name
        }
    }

}


// @Logger('Loggining Person ')
@WithTemplate('<h1>My person Object</h1>','app')
@Logger('Logging')
class Person {
    name = 'Max'
    constructor(){
        console.log('Creating the person object ')
    }
}

const pers = new Person()
// console.log(pers)

function Log(target:any,propertyName: string | symbol){
    console.log('Property decorator ')
    console.log(target,propertyName)

}

function Log2(target:any,name:string,descriptor:PropertyDescriptor){
    console.log('Accessor Decorator ')
    console.log(name)
    console.log(target)
    console.log(descriptor)
}

function Log3(target:any, name: string | symbol , descriptor:PropertyDecorator){
    console.log('Method Decorator ')
    console.log(name)
    console.log(target)
    console.log(descriptor)
}

// -
class Product {
    @Log
    title: string;
    private _price: number;
    @Log2
    set price(val:number){
        if(val > 0){
            this._price = val;
        }else{
             throw new Error('Invalid Price - should be positive')
        }
    }
   
    constructor(t:string,p:number){
        this.title = t
        this._price = p
    }
    @Log3
    getPriceWithTax(tax:number){
        return this._price * (1 + tax)

    }
}