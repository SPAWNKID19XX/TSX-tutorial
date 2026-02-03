let numb = 2;
numb = 1;
//numb = "hello world"; //type error 
console.log("variable NUMB: ", numb);
let simbol1, simbol2: symbol;

simbol1=Symbol("orderID");
simbol2=Symbol("orderID");
console.log('SIMBOL1: ',simbol1);
console.log('SIMBOL2: ',simbol2);
console.log('EQUALITY: ',simbol1=simbol2);


const myName = "Boris";
const myAge = 38;

const  myCustomObject = {
    'name': myName,
    'age': myAge,
};

console.log('MYCUSTOMOBJECT: ',myCustomObject);
console.log("MYCUSTOMOBJECT['name']: ",myCustomObject['name']);
console.log("MYCUSTOMOBJECT['age']: ",myCustomObject['age']);

function getName(myVar: {'name': string}): string | null {
    return "GETNAME FUNCTION RETURNS: "+myVar['name'];
};


const logger = () => {
    let i, b: number;
    i=0;
    b=10;

    while(i<b){
        console.log("Bum");
        i = i+1;
    }
}
console.log(getName(myCustomObject));
logger();

function clacTaxes(state:string, depends: number, salary:number): number|string  {
    console.log(state);
    
    let res: number|string
    if (state==='ny') {
        res = salary - (salary*25/100)+(depends + (salary*5/100));
    } else if (state==='nj') {
        res = salary - (salary*25/100)+(depends + (salary*5/100));
    } else {
        res ="Unknown state!";
    }
    return res;
}

const ny = clacTaxes('ny', 1000, 2)
const nj = clacTaxes('nj', 1050, 3)
const un = clacTaxes('al', 1100, 4)

console.log("NY: ", ny);
console.log('NJ: ', nj );
console.log("UN: ", un);

function padLeft(value: string, padding: string|number): string {
    let res: string
    if (typeof padding === 'string') {
        res = padding + value;
    } else if (typeof padding === "number") {
        res = Array(padding + 1).join(" ") + value;
    } else {
        res = padding
        
    } 
    return res
}

let a = padLeft("Hello world", 4);
let b = padLeft("Hello world", "Boris says ");


console.log(a);
console.log(b);





