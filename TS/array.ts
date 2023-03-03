const activeUsers: [] = [] // type is empty array 
const activeUsers0 = [] // type is empty array 
activeUsers0.push(1)

const activeUsers2: [] = [1] // Type '[number]' is not assignable to type '[]'. Source has 1 element(s) but target allows only 0

activeUsers.push("blaire") // Argument of type 'string' is not assignable to parameter of type 'never'.ts(2345)

// we need to use a type annotation followed by empty array brackets


const activeUsers3: number[] = [1, 3] 
activeUsers3[0] = 10 // we can change
const activeUsers4: string[] = [] 
activeUsers4.push("blaire")

const activeUsers5: string[] = ["blaireee"]
const activeUsers55: Array<string> = ["blaireee"]

// these arrays only allow data of that one type inside them.



// alternative syntax:
const names: Array<string> = ["blaire"]
const ages: Array<number> = [19, 20]

const bools: boolean[] = []
const bools2: Array<boolean> = []

type Point = {
	x: number;
	y: number;
};



const coords: Point[] = []


coords.push({ x: 1, y: 2 })
coords.push({ y:2 }) // Property 'x' is missing in type '{ y: number; }' but required in type 'Point'.
coords.push({ x: 1, y: "2" }) // Type 'string' is not assignable to type 'number'

// Multi-dimensional array

const board: string[][] = [["X", "O", "X"], ["X", "O", "O"], ["O", "X", "X"]]
const demo: number[][][] = [[[1]]]





