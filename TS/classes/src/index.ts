class Player {
    // must specify type before
    first: string;
    last: string;
    
    constructor(first: string, last: string) {
		this.first = first; // error Property 'first' does not exist on type 'Player'
		this.last = last;
	}
}

const blaire = new Player("Blaire", "Pang");