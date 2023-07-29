// -------------- built-in generic ----------------- //
// const nums: number[] = [];
const nums: Array<number> = [];
const colors: Array<string> = [];

const inputEl = document.querySelector<HTMLInputElement>('#username')!;
console.dir(inputEl);
inputEl.value = 'Hacked!';
const btn = document.querySelector<HTMLButtonElement>('.btn')!;

// ------------- create our own generic ----------- //
function numberIdentity(item: number): number {
	return item;
}

function stringIdentity(item: string): string {
	return item;
}

function booleanIdentity(item: boolean): boolean {
	return item;
}

// wrong:
// function identity(item: any): any {
//     return item;
// }

// we want to return the type same as the type we pass to it
// generic function:
function identity<Type>(item: Type): Type {
	return item;
}
// we can call Type whatever we want
function identity2<A>(item: A): A {
	return item;
}
function identity3<T>(item: T): T {
	return item;
}
function identity4<generic>(item: generic): generic {
	return item;
}
// we established a relationship here --> whatever input type is, it will also be the return type
// I can customize this identity function to work with different types
// It's a generic version that just says some type

identity<string>('blaire'); // automatically know it will return a
identity<boolean>(true);
identity<number>(7);

interface Cat {
	name: string;
	breed: string;
}

identity<Cat>({ name: 'oreo', breed: 'american short hair' });

// ------------- another generic function ---------------- //

function getRandomElement<T>(list: T[]): T {
	const randIdx = Math.floor(Math.random() * list.length); // Math.random() returns a number from 0 to <1
	return list[randIdx];
}

console.log(getRandomElement<string>(['a', 'b', 'c']));

// ----------- inferred generic type parameter ------------- //
let x = 23;
getRandomElement(['a', 'b', 'c']);
getRandomElement([1, 2, 3, 4]);

// ------------- generics with multiple types --------------- //

function merge<T extends object, U extends object>(obj1: T, obj2: U) {
	// infer: function merge<T, U>(obj1: T, obj2: U): T & U
	return {
		...obj1,
		...obj2,
	};
}

const combo = merge({ name: 'blaire' }, { age: 21 });
// const combo2 = merge({ name: 'blaire' }, 21);

console.log(combo);

interface lengthy {
	length: number;
}

function printDoubleLength<T extends lengthy>(thing: T): number {
	return thing.length * 2;
}

function printDoubleLength2(thing: lengthy): number {
	return thing.length * 2;
}

// --------------- default type parameter ---------------- //

function makeEmptyList<T = number>(): T[] {
	return [];
}

const strings = makeEmptyList(); // by default: const strings: number[]
const bools = makeEmptyList<boolean>(); // by default: const strings: number[]

// ---------------- generic classes ---------------- //

interface Song {
	title: string;
	artist: string;
}

interface Video {
	title: string;
	creator: string;
	resolution: string;
}

class PlayList<T> {
	public queue: T[] = [];
	add(el: T) {
		this.queue.push(el);
	}
}

const songs = new PlayList<Song>();
songs.add();

const videos = new PlayList<Video>();
videos.add();
