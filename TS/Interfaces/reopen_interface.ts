// add new properties to interfaces after we've already described an interface

// we cannot reopen type alias

///// type alias //////
type Person = {
	name: string;
};

// error: Duplicate identifier 'Person'
type Person = {
	age: number;
};

// error: age didn't get added to Person Type
const person: Person = {
	name: 'blaire',
	age: 21,
};

///// interface //////
interface Person2 {
	name: string;
}

// reopen the interface and add age
interface Person2 {
	age: number;
}

// OK - Person2 has name & age
const person2: Person2 = {
	name: 'Blaire',
	age: 21,
};

///////////////////////////////////////////////////////
interface Dog {
	name: string;
	age: number;
}

// not overwriting, not replacing
// reopen and add on
interface Dog {
	breed: string;
	bark(): string;
}

const elton: Dog = {
	name: 'elton',
	age: 3,
};
// Type '{ name: string; age: number; }' is missing the following properties from type 'Dog': breed, bark

const elton: Dog = {
	name: 'elton',
	age: 3,
	breed: 'shiba',
	bark: () => 'woof',
};
