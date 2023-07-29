// extend an interface
// inherit from another interface

interface Dog {
	name: string;
	age: number;
	breed: string;
	bark(): string;
}

interface ServiceDog extends Dog {
	job: 'drug sniffer' | 'boob' | 'guide';
}

const chewy: ServiceDog = {
	name: 'chewy',
	age: 3,
	breed: 'Lab',
	bark: () => 'woof',
	job: 'guide',
};

///// we can extend multiple interface //////

interface Person {
	name: string;
}

interface Employee {
	readonly id: number;
	email: string;
}

interface Engineer extends Person, Employee {
	level: string;
	skills: string[];
}

const blaire: Engineer = {
	name: 'Blaire',
	id: 11111,
	email: 'xxxx@xx.com',
	level: 'junior',
	skills: ['JS', 'Python', 'C++'],
};

// we cannot extend type alias
// we need to use &

type Name = {
	name: string;
};

type Job = {
	job: string;
};

type Human = Name &
	Job & {
		age: number;
	};

const human: Human = {
	name: 'blaire',
	job: 'student',
	age: 21,
};
