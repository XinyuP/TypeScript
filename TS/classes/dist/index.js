"use strict";
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
    constructor(first, last, 
    // private _score: number
    _score // protected means cannot access _score outside class except in any child classes
    ) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
        console.log('Secret Method!');
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        // TS doesn't want to have any return type annotations for setters
        if (newScore < 0) {
            throw new Error('Score must be positive!');
        }
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 99999;
        // Property '_score' is private and only accessible within class 'Player'
        // private doesn't apply to any child classes, anything that inherits or extends that class
        // we nned to change it to be protected
    }
}
const blaire = new Player('Blaire', 'Pang', 0);
// blaire.secretMethod(); // Property 'secretMethod' is private and only accessible within class 'Player'
blaire.fullName;
blaire.score = 100;
class Bike {
    // Class 'Bike' incorrectly implements interface 'Colorful'. //Property 'color' is missing in type 'Bike' but required in type 'Colorful'.
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand} `);
    }
}
// class implements interface:
// the only rule right now is that the class must have a color property that is a string
const bike1 = new Bike('red');
const jacket1 = new Jacket('Prada', 'black');
