class Person {
    firstName: string = "";
    lastName: string = "";
    age: number = 0;

    sayHello() {
        return `My name is ${this.firstName} ${this.lastName} and I am ${this.age} Years old`
    }
}

class Emplloyeer extends Person {
    departament: string = ""

    sayHello(): string {
        return super.sayHello() + `and I am ${this.departament} specialist`
    }
}

let empl= new Emplloyeer()

empl.firstName="Boris"
empl.lastName="Isac"
empl.age=38
empl.departament="IT"

console.log(empl.sayHello());
