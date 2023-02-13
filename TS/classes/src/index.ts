// class Player {
// 	// must specify type before
// 	public readonly first: string;
// 	public readonly last: string;
// 	private score: number = 0;
// 	// #score: number = 0;
// 	// we don't need to put public here, but we can put it here for clarity sake
// 	// to make it clear to other developers that this property is changable, accessible outside of class

// 	constructor(first: string, last: string) {
// 		this.first = first; // error Property 'first' does not exist on type 'Player'
//         this.last = last;
//         this.secretMethod();
// 	}

// 	private secretMethod() {
// 		console.log('Secret Method!');
// 	}
// }

// by default, in JS and TS, every single property/method in a class is considered public

//// Parameter Properties shorthand version: ////
class Player {
    // public and private keywords only exist in TS
	// public readonly first: string;
	// public readonly last: string;
	// private score: number = 0;
	constructor(
		public readonly first: string,
		public readonly last: string,
		private _score: number
	) {}

	private secretMethod() {
		console.log('Secret Method!');
	}

	get fullName(): string {
		return `${this.first} ${this.last}`;
	}
	get score(): number {
		return this._score;
    }
    
    set score(newScore: number) { // TS doesn't want to have any return type annotations for setters
		if (newScore < 0) {
			throw new Error('Score must be positive!');
		}
		this._score = newScore;
	}
}

const blaire = new Player('Blaire', 'Pang', 0);
// blaire.secretMethod(); // Property 'secretMethod' is private and only accessible within class 'Player'

blaire.fullName;
blaire.score = 100;
// blaire.score = -100;

