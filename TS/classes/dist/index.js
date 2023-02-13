"use strict";
class Player {
    constructor(first, last) {
        this.first = first; // error Property 'first' does not exist on type 'Player'
        this.last = last;
    }
}
const blaire = new Player("Blaire", "Pang");
