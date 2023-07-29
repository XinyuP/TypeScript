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
// --------------- abstract class ------------------ //
class Cat {
}
/**
 * what we do with abstract class is that we define a pattern/methods that must
 * be implemented by a clild class
 */
// with abstract, I can no longer create a new instance of cat
// new Cat(); // error: Cannot create an instance of an abstract class
// this is a class with functionality, interface cannot do things like this, it solely describing the shape of an object
// abstract class has functionality, data, but it also says: btw, you must implement the abstract getPay() method to extend this class
// it enforcing some type of stuff, it also adds functionality in
// like hybrid
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    // this method does exist here, it is just saying that it needs to exist in any class that extends Employee
    // every instance of an employee subclass(FullTimeEmployee, PartTimeEmployee)
    // anything that implement this class(Employee) must have a method called getPay()
    greet() {
        console.log("hello");
    }
}
// I can no longer instantiate any instance of employee itself
// Employee - FullTimeEmployee - PartTimeEmployee
// in order to be an Employee or in order to implement or extends this class 
// you must have the abstract method 
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
// They are still inheriting functionality
// but thet also inherit a constraint or a rule that they must follow
const betty = new FullTimeEmployee("Betty", "White", 100000);
console.log(betty.getPay());
const bill = new PartTimeEmployee("bill", "White", 20, 1000);
console.log(bill.getPay());
