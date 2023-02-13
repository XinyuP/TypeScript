/**
    Interfaces serve almost the exact
    same purpose as type aliases
    (with a slightly different syntax).

    Interfaces allow us to describe the shape of objects and only objects

    We can use them to create reusable, modular types that
    describe the shapes of objects

 */




/**
 * Interfaces can only describe the shapes of objects
 * Interfaces can't describe the shape of literal 
 * 
 * Type alias can describe any sort of type, it's just a name for a type
 * It can be object type, function type, union type
 * 
 */


/**
 * Interfaces can reopen, extend, multiple inheritance 
 * Type alias cannot reopen, cannot extend-- but use &
 */




// Interfaces can't describe the shape of literal 
// can only use type to do this: 
type Color = "red" | "blue";

// we can't replace all type alias with interfaces
// we have to use type alias if we are not describing the shape of an object
















// can't make an interface for a union type (can use type alias for this)

type Point1 = {
	x: number;
	y: number;
};

interface Point2 {
	// shape of the onject
	x: number;
	y: number;
}

const pt1: Point1 = { x: 1, y: 2 };
const pt2: Point2 = { x: 1, y: 2 };

///// we can create optional properties
interface Person {
	first: string;
	last: string;
	nickname?: string;
}

const bp: Person = { first: 'Blaire', last: 'Pang' };
const bp: Person = { first: 'Blaire', last: 'Pang', nickname: 'bp' };
const bp: Person = { first: 'Blaire' }; // error Property 'last' is missing

///// we can use read only modifier
interface Person {
	readonly id: number;
	first: string;
	last: string;
	nickname?: string;
}

const blaire: Person = {
	id: 11111,
	first: 'Blaire',
	last: 'Pang',
	nickname: 'bp',
};

blaire.first = 'blair';
blaire.id = 12345; // Cannot assign to 'id' because it is a read-only property
