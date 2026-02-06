class Gangsta {
    public name: string
    static bullets: number = 30

    constructor(name: string){
        this.name = name;
    }

    shoot() {
        Gangsta.bullets = Gangsta.bullets - 1;
        console.log(`Total bullets for ${this.name} left: ${Gangsta.bullets}`);
    }
}

const g1: Gangsta = new Gangsta('Boris');
g1.shoot()
g1.shoot()

console.log(g1);


class AppState {

    counter=0;
    private static instanceRef: AppState | undefined;

    private constructor() {}

    static getInstance(): AppState  {
        if (AppState.instanceRef === undefined) {
            AppState.instanceRef = new AppState();
        }
        return AppState.instanceRef;
    }
}


const appState1 = AppState.getInstance();
const appState2 = AppState.getInstance();
console.log(appState1.counter);
console.log(appState2.counter);

appState1.counter++;
appState1.counter++;
appState2.counter++;
appState2.counter++;


console.log(appState1.counter);
console.log(appState2.counter);
