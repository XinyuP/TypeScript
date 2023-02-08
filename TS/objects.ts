function printName(person: { first: string; last: string }): void {
	console.log(`${person.first} ${person.last}`);
}

printName({ first: 'Blaire', last: 'Pang' });

let coord: { x: number; y: number } = { x: 2, y: 3 };

function randomCoord(): { x: number; y: number } {
	return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: { x: number; y: number }): {
	x: number;
	y: number;
} {
	return { x: point.x * 2, y: point.y * 2 };
}

//// Type Alias
type Point = {
	x: number;
	y: number;
};
let coord2: Point = { x: 2, y: 3 };

function doublePoint2(point: Point): Point {
	return { x: point.x * 2, y: point.y * 2 };
}

// Type Alias
// object type
type Person = {
	name: string;
	age: number;
};

// printName({ first: 'Blaire', last: 'Pang', age: 21 }); // error
const me = { first: 'Blaire', last: 'Pang', age: 21, isAlive: true };
printName(me); // no error

//// nested objects
type Song = {
	title: string;
	artist: string;
	numStreams: number;
	credits: {
		producer: string;
		writer: string;
	};
};

function cal(song: Song): number {
	return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
	console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
	title: 'Grateful',
	artist: 'dhruv',
	numStreams: 123456789,
	credits: {
		producer: 'qwe',
		writer: 'qwe',
	},
};

const earning = cal(mySong);
console.log(earning);
printSong(mySong);

//// optional properties
type Point2 = {
	x: number;
	y: number;
	z?: number; //optional
};

const point1: Point2 = { x: 1, y: 2, z: 3 };
const point2: Point2 = { x: 1, y: 2 };

//// the readonly modifier

// optional properties
type User = {
	readonly id: number;
	username: string;
};

const user: User = {
	id: 12345,
	username: 'blairepang',
};

console.log(user.id);
user.username = 'xinyup';
//user.id = 1111 // error

//// intersection types
type Circle = {
	redius: number;
};

type Colorful = {
	color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
	redius: 4,
	color: 'pink',
};

type Cat = {
	num: number;
};

type Dog = {
	breed: string;
};

type CatDog = Cat &
	Dog & {
		age: number; // add on one more property after intersection
	};

const kk: CatDog = {
	num: 7,
	breed: 'Husky',
	age: 12,
};
