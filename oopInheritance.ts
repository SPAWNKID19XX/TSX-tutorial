class Person {
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        private idNumber: string
    ) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.idNumber = idNumber
    }

    sayHello() {
        return `My name is ${this.firstName} ${this.lastName} and I am ${this.age} Years old`
    }

    sellStock(simbols: string, numberOfShares: number) {
        console.log(`Selling... ${numberOfShares} items of ${simbols}`);
    }


}

class Emplloyeer extends Person {
    constructor(
        firstName: string,
        lastName: string,
        age: number,
        idNumber: string,
        public departament: string
    ) {
        super(firstName,lastName,age,idNumber)
        this.departament = departament
    }

    sayHello(): string {
        return super.sayHello() + `and I am ${this.departament} specialist`
    }


    sellStock(simbols: string, numberOfShares: number) {
        super.sellStock(simbols, numberOfShares);
        this.reportInfo(simbols, numberOfShares);
    }

    private reportInfo(simbols: string, numberOfShares: number) {
        console.log(`${this.firstName} ${this.lastName} from ${this.departament} departament, sold ${numberOfShares} of ${simbols}`); 
    }
    
}

let empl = new Emplloyeer('Aaron', 'isac',12,'pupsik2','IT')
let per = new Person("Boris","Isac", 38,'Pupsik1')





console.log(empl.sayHello());

console.log(per.sayHello());

empl.sellStock("microsoft", 5);


