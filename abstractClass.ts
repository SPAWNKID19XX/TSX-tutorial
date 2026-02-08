abstract class Person {
    constructor(public name: string) { }

    changeAddres (newAddres:string) {
        console.log(`Adress has been changed for ${this.name} for ${newAddres}` );
    }

    giveDayOff () {
        console.log(`Giving a day off to ${this.name}`);
    }

    promote(percent: number) {
        this.giveDayOff();
        this.increasePay(percent);
    }

    abstract increasePay(percent:number): void;
}

class Emplloyeer extends Person {
    increasePay(percent:number){
        console.log(`increasing to ${this.name} ${percent}%`);
    }
}

class Contractor extends Person {
    increasePay(percent:number){
        console.log(`Increasing the hourly rate of ${this.name} by ${percent}%`);
    }
}

const workers: Person[] = []

workers[0]= new Emplloyeer("Boris")
workers[1]= new Contractor("Aaron")

workers.forEach(worker => worker.promote(5))

console.log(workers);

