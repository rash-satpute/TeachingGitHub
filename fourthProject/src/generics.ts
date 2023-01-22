// const names : Array<string> = [];
// names[0].split('')


// const promise : Promise<number> = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve(200)
//     }, 200);
// })

function merge<A extends object,B extends object>(objA: A, objB: B){
    return Object.assign(objA,objB)
}

// const mergedObject =  merge({name:'Reshma',hobbies:['reading']},30)
// const mergedObject1 =  merge<{name: string,hobbies:string[]},{age:number}>({name:'Reshma',hobbies:['reading']},{age:23})
// console.log(mergedObject)

interface Lengthy {
    length : number
}


function countAndDescription<T extends Lengthy>(element:T):[T,string]{
    let descriptionText = 'Got no Value ...'
    if(element.length == 1){
        descriptionText = 'Got 1 element'
    }else if(element.length > 1){
        descriptionText = 'Got'+ element.length + 'elements'
    }

    return [element,descriptionText]
}

console.log(countAndDescription('Hii there!'))


function extractAndConvert<T extends object,U extends keyof T>(obj: T,key: U){
    return obj[key]
}

extractAndConvert({name:'max'},'name')

class DataStorage<T extends string | number | boolean> {
    private data : T[]= [];

    addItem(item:T){
        this.data.push(item)
    }
    removeItem(item:T){
        if(this.data.indexOf(item) == -1){
            return;
        }
        this.data.splice(this.data.indexOf(item),1)
    }

    getItem(){
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>()

textStorage.addItem('max')
textStorage.addItem('menu')
textStorage.removeItem('max')

console.log(textStorage.getItem())

const numberStorage = new DataStorage<number>()

// const objectStorage = new DataStorage<object>()
// objectStorage.addItem({name:'Max'})
// objectStorage.addItem({name:'Menu'})

// objectStorage.removeItem({name:'Max'})

// console.log(objectStorage.getItem())


interface CourseGoal {
    title: string;
    description:string;
    completeUntil: Date
}

function createCourseGoal(title:string,description:string,date:Date): CourseGoal {
    const courseGoal: Partial<CourseGoal> = {}
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal
    // return {title:title,description:description,completUntil:date}
}

const names : Readonly<string[]>= ['Max ','Anna']
// names.push('Menu')

