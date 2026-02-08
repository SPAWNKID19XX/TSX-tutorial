abstract class Person {
    constructor(public name: string) { }

    changeAddres (newAddres:string) {
        console.log(`Adress has been changed for ${this.name}` );
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