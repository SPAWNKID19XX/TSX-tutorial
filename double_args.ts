interface Circle {
    shape: "circle",
    radius: number
};

interface Square {
    shape: "square",
    side: number
};

interface Rectangle {
    shape: "rectangle",
    length: number,
    height: number
}

type Shape = Rectangle|Circle|Square

function calc_area(shape: Shape): number | string {
    let res:number | string
    let pi: number = 3.14
    if (shape.shape === "circle") {
        res = pi*(shape.radius**2)
    } else if (shape.shape === "square") {
        res = shape.side ** 2
    } else if (shape.shape === "rectangle") {
        res = shape.length * shape.height
    } else {
        res ="Unknown shape"
    }
    return res
}   

const myRect: Rectangle = {
    shape: "rectangle",
    height: 20,
    length:13
}
console.log("Rectungle area = ", calc_area(myRect));

const myCircle: Circle = {
    shape: "circle",
    radius: 25
}

console.log("Circle area = ", calc_area(myCircle));

const mySquare: Square = {
    shape: "square",
    side: 25
}

console.log("Square area = ", calc_area(mySquare));