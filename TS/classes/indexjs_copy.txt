class Player {
	// --------- static ----------- //
	static description = 'Player In The Game';
	// this will not exist on individual instances
	// only exist on the player class
	static randdomPlayer() {
		return new Player('Tony', 'Robert');
	}

	// --------- field ------------ //
	// on every instance of player:
	#score = 0; // private --> only usable inside of the Player class
	#numLives = 10;
	// syntactic sugar
	// only allow values that are hard coded

	// ------------constructor --------//
	// we don't have to define a constructor
	// we can only define constructor once
	// it has to be called constructor
	// constructor will automatically be called
	constructor(first, last) {
		this.first = first;
		this.last = last;
		this.#secret();
		// this.score = 0;
		// this.numLives = 10;
	}
	// every time we instantiate a new instance of this class, JS behind the scenes calls this constructor function
	// we don't execute constructor manually, whenever we instantiate a new player, instantiate is automatically called

	//-------- getter ------------//
	get fullName() {
		return `${this.first} ${this.last}`;
	}

	// getScore() {
	// 	return this.#score;
	// }
	get score() {
		return this.#score;
	}

	//------- setter -------------//
	set score(newScore) {
		if (newScore < 0) {
			throw new Error('Score must be positive!');
		}
		this.#score = newScore;
	}

	// updateScore(newScore) {
	//     this.#score = newScore;
	// }

	set fullName(newName) {
		const [first, last] = newName.split(' ');
		this.first = first;
		this.last = last;
	}

	//----------------------------//

	taunt() {
		console.log('BOOYAH!');
	}

	loseLife() {
		this.#numLives -= 1;
	}

	#secret() {
		// private method
		console.log('secret!!');
	}
}

// ---------- inheritance ---------- //
// extends from parent class
// we can add on different property
class AdminPlayer extends Player {
	// Must call super constructor in derived class before accessing 'this'
	// or returning from derived constructor
	constructor(first, last, powers) {
		super(first, last);
		this.powers = powers;
	}
	isAdmin = true;
}

const admin = new AdminPlayer('blaire', 'pang'); 
const admin2 = new AdminPlayer(['delete', 'restore']); // wrong: first: ['delete', 'restore']
const admin3 = new AdminPlayer('blaire', 'pang', ['delete', 'restore']);











/*
const player1 = new Player('blaire', 'pang');
console.log(player1.numLives);
player1.loseLife();
console.log(player1.numLives);
player1.score = 11;
// console.log(player1.getScore())
console.log(player1.score);

// player1.score = -10 // Uncaught Error: Score must be positive!

const player2 = new Player('charlie', 'brown');
console.log(player2.fullName); // behave like there is a property called fullName --> but it actually computed
player2.fullName = 'Taylor Swift';
console.log(player2.fullName);
*/
