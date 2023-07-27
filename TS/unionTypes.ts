// Union types allow us to give a value a few different possible types
//by using a single | to seperate the types

const guessAge = (age: number | string) => {
    return "You age is " + age;
}

guessAge(30)
guessAge("30")
guessAge("ten")
guessAge({ age: 30 }) // can't

let age: number | string = 21
age = "24"


let age2: number | string | boolean = 21
age2 = true


type Point = {
    x: number;
    y: number;
};

type Loc = {
    lat: number;
    long: number;
};

let coord3: Point | Loc = { x: 1, y: 2 }
coord3 = {lat: 231, long: 123}


function printAge(age: number | string): void {
    console.log(`You are ${age} years old`)
}

printAge(23)
printAge("23")

// Type Narrowing 
// narrowing the type is doing a type check before working with a value
function calTax(price: number | string, tax: number) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""))
    }
    // else{
    // //if (typeof price === "number") {
    //     price * tax
    // }
    return price * tax
}




const stuffs: any[] = [1,2,"jds", true]


// Array of two types
const unionArray: number | string[] = 2
const unionArray1: number | string[] = ["blaire"]
const unionArray2: (number | string)[] = [1, 21, "blaire"]
const unionArray3: number[] | string[] = [1, 21]
const unionArray4: number[] | string[] = ["bliare", "is", "21"]



const coord4: (Point | Loc)[] = []
coord4.push({ lat: 231, long: 123 })
coord4.push({ x: 1, y: 2 })




