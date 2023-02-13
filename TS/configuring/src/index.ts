interface Chicken {
	breed: string;
	eggs: number;
	name: string;
	age: number;
}

const norma: Chicken = {
	breed: 'Silkie',
	eggs: 4,
	name: 'Norma',
	age: 2,
};

// watch mode, auto compile
// tsc -- watch
// tsc -w ---> auto compile all the file in the folder
// use only tsc will compile all the file in the folder 
