class Player {
    // we don't have to define a constructor
    // we can only define constructor once
    // it has to be called constructor
    // constructor will automatically be called
    constructor(first, last) {
        this.first = first;
        this.last = last;
       
    }
    // every time we instantiate a new instance of this class, JS behind the scenes calls this constructor function
    // we don't execute constructor manually, whenever we instantiate a new player, instantiate is automatically called 

    
}

const player1 = new Player("blaire", "pang");

const player2 = new Player("charlie", "brown");






