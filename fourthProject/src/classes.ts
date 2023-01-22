// Code goes here!

abstract class Department {
    // private id : string;
    // private name : string;
    protected  employees : string[]= []
    static fiscalYear = '2022'

    constructor(protected readonly id: string ,public name:string){
    //  this.name = n;
    // console.log(Department.fiscalYear)
    }
   
   static createEmployee (name: string){
        return {name: name}

    }
    abstract describe(this:Department):void;
    // describe(this:Department){
    //     console.log("Department ",this.name, this.id)
    // }
    addEmployee(employee: string){
        this.employees.push(employee)

    }
    printEmployeeInformation(){
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

class ITDepartments extends Department{
    admin : string []
    constructor(id: string,  admin : string[]){
        super(id,'IT')
        this.admin = admin
    }
    describe() {
      console.log('IT DEPARTMENTS -ID',this.id)  
    }

} 

class AccountingDepartment extends Department{
    private lastReport : string;
    private static instance : AccountingDepartment;
    
   private constructor(id: string,  private reports : string[]){
        super(id,'IT')
        this.lastReport = reports[0];
        
    }
    static getInstance (){
        if(AccountingDepartment.instance){
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2',[])
        return this.instance;
    }
    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport
        }
        throw new Error('No result found')
    }
    set mostRecentReport(value){
        if(!value){
            throw new Error('Please pass in new value')
        }
        this.addReports(value)

    }
    describe() {
        console.log("&&&&",this.id)
    }
    addEmployee(name: string): void {
        if(name === 'Max'){
            return;
        }
        this.employees.push(name)
        
    }
    addReports(text : string){
        this.reports.push(text)
        this.lastReport = text

    }
    printsReports(){
        console.log(this.reports)
    }

} 

const employe1 = Department.createEmployee("JADU")
console.log("**",employe1,Department.fiscalYear)

const it = new ITDepartments('1',['Max','abc']);
it.addEmployee('Max');
it.addEmployee('res');
// accounting.employees[2] = 'Vaisu'
it.name = 'New name'


console.log(it);
it.describe()
// const accountingCopy = {name:'s', describe : accounting.describe}
// console.log(accountingCopy.describe())

// const AccountingDepartments = new AccountingDepartment('d2',[]);
const AccountingDepartments = AccountingDepartment.getInstance()
const AccountingDepartments2 = AccountingDepartment.getInstance()
console.log("lll",AccountingDepartments,AccountingDepartments2);
AccountingDepartments.mostRecentReport = 'Year end repport'
AccountingDepartments.addReports('404 something went wrong');
AccountingDepartments.printsReports()
AccountingDepartments.describe();
// AccountingDepartments.addEmployee('Max')
// AccountingDepartments.addEmployee('Mat')
AccountingDepartments.printEmployeeInformation()
console.log(AccountingDepartments.mostRecentReport);
