class Person {
    firstName: string = "";
    lastName: string = "";
    age: number = 0;
}

class Emplloyeer extends Person {
    departament: string = ""
}

let empl= new Emplloyeer()

empl.firstName="Boris"
empl.lastName="Isac"
empl.age=38
empl.departament="IT"

console.log(empl);
