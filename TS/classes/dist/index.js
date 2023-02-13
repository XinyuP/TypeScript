class Player {
	// on every instance of player:
	#score = 0; // private --> only usable inside of the Player class
	#numLives = 10;
	// syntactic sugar
	// only allow values that are hard coded

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

	getScore() {
		return this.#score;
    }
    
    updateScore(newScore) {
        this.#score = newScore;
    }
	taunt() {
		console.log('BOOYAH!');
	}

	loseLife() {
		this.#numLives -= 1;
    }
    
    #secret() { // private method
        console.log("secret!!");
    }
}

const player1 = new Player('blaire', 'pang');
console.log(player1.numLives);
player1.loseLife();
console.log(player1.numLives);

const player2 = new Player('charlie', 'brown');
