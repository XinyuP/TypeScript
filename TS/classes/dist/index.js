"use strict";
class Player {
    // #score: number = 0;
    // we don't need to put public here, but we can put it here for clarity sake
    // to make it clear to other developers that this property is changable, accessible outside of class
    constructor(first, last) {
        this.score = 0;
        this.first = first; // error Property 'first' does not exist on type 'Player'
        this.last = last;
        this.secretMethod();
    }
    secretMethod() {
        console.log('Secret Method!');
    }
}
// by default, in JS and TS, every single property/method in a class is considered public
const blaire = new Player('Blaire', 'Pang');
blaire.secretMethod(); // Property 'secretMethod' is private and only accessible within class 'Player'
