type Person = {
    name:string;
    addres:string;
    age:number;
}

let person: unknown
let person1:any

person = JSON.parse('{"name":"Boris", "adress":"adress_person", "age": 38}');
person1 = JSON.parse('{"name":"Isac", "adress":"adress_person1", "age": 38}');

const isPerson = (obj:any): obj is Person => "name" in obj 

if (isPerson(person)) {
    console.log(person.name);
}
if (isPerson(person1)) {
    console.log(person1.name);
}
