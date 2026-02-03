type Name= string;
type Age= number;
type Gender = string;

type Person = {
    full_name:Name;
    age: Age;
    gender: Gender;
    weight?:number
}

let new_person : Person={
    full_name: "Boris Isac",
    age: 38,
    gender: "M",
    weight: 187
}

function getName(person_data: Person): string {
    return person_data['full_name']
}

console.log('Person object',new_person);
console.log("full_name Person's object",getName(new_person));


class Emplloyeer {
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number
    ) {};
}

let ne = new Emplloyeer(
    "Boris",
    "Isac",
    38
)

console.log('NewEmployee: ',{...ne});
