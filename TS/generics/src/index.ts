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
