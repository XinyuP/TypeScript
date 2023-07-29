/*
Typeof Guards
typeof Type Guards involve simply doing a
type check before working with a value.
Since unions allow multiple types for a value,
we can first check what came through
before working with it
*/
function triple(value: number | string) {
	if (typeof value === 'string') {
		return value.repeat(3);
	}
	return value * 3;
}

/*
Truthiness Guards
Truthiness Type Guards involve
checking a value for being truthy or
falsy before working with it.
This is helpful in avoiding errors when
values might be null or undefined.
*/

const el = document.getElementById('idk'); // const el: HTMLElement | null
if (el) {
	el; //const el: HTMLElement
} else {
	el; //const el: null
}

const printLetters = (word?: string) => {
	if (word) {
		for (let char of word) {
			console.log(char);
		}
	} else {
		word; // (parameter) word: string | undefined
		// TS cannot say for sure that it is not string here, because empty also goes here
	}
};

/*
Equality Narrowing
equality Type Guards involve
comparing types to each other
before doing certain operations with
values.
By checking two values against one
another, we can be sure they're both
the same before working with them in
a type-specific way.
*/

function someDemo(x: string | number, y: string | boolean) {
	if (x === y) {
		x.toUpperCase();
		y.toUpperCase();
	}
}

/*
in Operator Narrowing
Javascript's in operator helps check if
a certain property exists in an object.
This means we can use it to check if a
value exists in an object, according to
its type alias or aliases, before
working with it.
*/

interface Movie {
	title: string;
	duration: number;
}

interface TVShow {
	title: string;
	numEpisodes: number;
	episodesduration: number;
}

function getDuration(media: Movie | TVShow) {
	if ('numEpisodes' in media) {
		return media.numEpisodes * media.episodesduration; // (parameter) media: TVShow
	}
	return media.duration; // (parameter) media: Movie
}

/*
instanceof Narrowing
instanceof is a Javascript operator that
allows us to check if one thing is an instance
of another (remember prototypes?).
This can help us narrow types when working
with things like classes or things like Array and Date (anything that we instantiate using the new keyword)

This still not works for interfaces or type aliases

*/

function printFullDate(date: string | Date) {
	if (date instanceof Date) {
		console.log(date.toUTCString());
	} else {
		console.log(new Date(date).toUTCString());
	}
}

class User {
	constructor(public username: string) {}
}

class Company {
	constructor(public name: string) {}
}

function printName(entity: User | Company) {
	if (entity instanceof User) {
		entity; //(parameter) entity: User
	} else {
		entity; // (parameter) entity: Company
	}
}

/*
Type Predicates
Typescript allows us to write custom
functions that can narrow the type of
a value. These functions have a very
special return type called a type
predicate.

A predicate takes the form:
parameterName is Type

*/

interface Cat {
	name: string;
	num: number;
}

interface Dog {
	name: string;
	breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
	// this means if this function return true, then we know the value that we passed in is of type Cat
	return (animal as Cat).num !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
	if (isCat(animal)) {
		animal;
		return 'Meow';
	} else {
		animal;
		return 'woof';
	}
}

/* 
discriminated unions
A common pattern in Typescript involves
creating a literal property that is common
across multiple types.

We can then narrow the type using that
literal property
*/

interface Rooster {
	name: string;
	weight: number;
	age: number;
	kind: 'rooster'; // must be literal value
}

interface Cow {
	name: string;
	weight: number;
	age: number;
	kind: 'cow';
}

interface Pig {
	name: string;
	weight: number;
	age: number;
	kind: 'pig';
}

type FarmAnimal = Pig | Rooster | Cow;

function getFarmAnimal(animal: FarmAnimal) {
	switch (animal.kind) {
		case 'pig':
			return 'oink';
		case 'cow':
			return 'mooo';
		case 'rooster':
            return 'cockad';
        default:
            // we should never make it here if we handled all cases correctly 
            const _exhausiveCheck: never = animal
            return _exhausiveCheck
	}
}

/*
exhausiveness checks with never
*/
