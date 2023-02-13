interface Person {
	readonly id: number;
	first: string;
	last: string;
	nickname?: string;
	// sayHi: () => string;
	sayHi(): string; // same
}

const blaire: Person = {
	id: 11111,
	first: 'Blaire',
	last: 'Pang',
	nickname: 'bp',
};
// Property 'sayHi' is missing

const blaire: Person = {
	id: 11111,
	first: 'Blaire',
	last: 'Pang',
	nickname: 'bp',
	sayHi: () => 'Hello',
};

const blaire: Person = {
	id: 11111,
	first: 'Blaire',
	last: 'Pang',
	nickname: 'bp',
	sayHi: (name: string) => 'Hello', // Type '(name: string) => string' is not assignable to type '() => string'
};

interface Product {
	name: string;
	price: number;
	applyDiscount(discount: number): number;
}

const shoes: Product = {
	name: 'Nike',
	price: 100,
	applyDiscount(discount: number) {
		const newPrice = this.price * (1 - discount);
		this.price = newPrice;
		return this.price;
	},
};

console.log(shoes.applyDiscount(.4)) // 60