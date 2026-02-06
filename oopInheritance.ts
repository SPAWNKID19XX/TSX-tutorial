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
}

let empl = new Emplloyeer('Aaron', 'isac',12,'pupsik2','IT')
let per = new Person("Boris","Isac", 38,'Pupsik1')





console.log(empl.sayHello());

console.log(per.sayHello());
console.log(per)