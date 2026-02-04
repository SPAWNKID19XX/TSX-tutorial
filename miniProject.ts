/* 2.4. МИНИ-ПРОЕКТ
Напишите программу с двумя пользовательскими типами, Dog и Fish, объяв-
ленными с помощью классов. Каждый из этих типов должен иметь свойство
name. Класс Dog должен иметь метод sayHello(): string, а класс Fish — метод
dive(howDeep: number): string.
Объявите новый тип Pet в качестве объединения Dog и Fish. Напишите функцию
talkToPet(pet: Pet): string, которая будет использовать защиты типов и либо
вызывать метод sayHello() для экземпляра Dog, либо выводить сообщение «Fish
cannot talk, sorry». (Извините, рыбы не разговаривают.)Итоги   65
Вызовите talkTopet() трижды, в первый раз передав объект Dog, затем Fish
и в заключение объект, не являющийся ни Dog, ни Fish.*/


/*
2.4. MINI-PROJECT
If you prefer learning by doing, here is a small task accompanied by a solution. We won’t provide a detailed explanation of the solution itself, 
as the task description should be clear enough.
Task:
Define Classes: Create two user-defined types, Dog and Fish, using classes.
Both types must have a name property.
The Dog class must have a method sayHello(): string.
The Fish class must have a method dive(howDeep: number): string.
Define a Union Type: Declare a new type called Pet, which is a union of Dog and Fish.
Write a Function: Create a function talkToPet(pet: Pet): string. Inside this function, use type guards to:
Call the sayHello() method if the object is an instance of Dog.
Return the message "Fish cannot talk, sorry" if the object is an instance of Fish.
Execution: Call talkToPet() three times:
First, passing a Dog object.
Second, passing a Fish object.
Third, passing an object that is neither a Dog nor a Fish (note: you may need to bypass TypeScript's type checking or use any for this 
specific test case to see how the logic handles it).
*/

class Dog {
    constructor( public name: string) {};

    sayHello(): string {
        return "Hello from Dog class";
        
    };
};

class Fish {
    constructor (public name: string) {};

    dive(howDeep:number) : string  {
        return `${name} dive ${howDeep} metter underground`;
    };
};


type Pet = Dog|Fish

function tolkToPet(pet:Pet):string {
    let res: string
    if (pet instanceof Fish) {
        res = "Fish cannot talk, sorry"
    } else if (pet instanceof Dog) {
        res = pet.sayHello()
    } else {
        res = "Animal unknown"
    }
    return res
}

let myDog: Dog = new Dog("Dog")
let myFish: Fish = new Fish("Fish")

console.log(tolkToPet(myDog));
console.log(tolkToPet(myFish));
//console.log(tolkToPet({'name': 'Boris'})); //error

