interface Person {
    f_name:string;
    l_name:string;
    age:number;
    is_admin?: boolean;
}

function createPerson (person: Person): void {
    console.log('Saving--->',person);
}

const p: Person = {
    f_name:"Boris",
    l_name: "Isac",
    age:38,
    is_admin:true
}

createPerson(p)
