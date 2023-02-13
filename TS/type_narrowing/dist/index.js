"use strict";
/*
Typeof Guards
typeof Type Guards involve simply doing a
type check before working with a value.
Since unions allow multiple types for a value,
we can first check what came through
before working with it
*/
function triple(value) {
    if (typeof value === 'string') {
        return value.repeat(3);
    }
    return value * 3;
}
/*
Truthiness Guards
Truthiness Type Guards involve
checking a value for being truthy or
falsy before working with it.
This is helpful in avoiding errors when
values might be null or undefined.
*/
const el = document.getElementById('idk'); // const el: HTMLElement | null
if (el) {
    el; //const el: HTMLElement
}
else {
    el; //const el: null
}
const printLetters = (word) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    }
    else {
        word; // (parameter) word: string | undefined
        // TS cannot say for sure that it is not string here, because empty also goes here
    }
};
/*
Equality Narrowing
equality Type Guards involve
comparing types to each other
before doing certain operations with
values.
By checking two values against one
another, we can be sure they're both
the same before working with them in
a type-specific way.
*/
function someDemo(x, y) {
    if (x === y) {
        x.toUpperCase();
        y.toUpperCase();
    }
}
function getDuration(media) {
    if ('numEpisodes' in media) {
        return media.numEpisodes * media.episodesduration; // (parameter) media: TVShow
    }
    return media.duration; // (parameter) media: Movie
}
/*
instanceof Narrowing
instanceof is a Javascript operator that
allows us to check if one thing is an instance
of another (remember prototypes?).
This can help us narrow types when working
with things like classes or things like Array and Date (anything that we instantiate using the new keyword)

This still not works for interfaces or type aliases

*/
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
class User {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if (entity instanceof User) {
        entity; //(parameter) entity: User
    }
    else {
        entity; // (parameter) entity: Company
    }
}
function isCat(animal) {
    // this means if this function return true, then we know the value that we passed in is of type Cat
    return animal.num !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        animal;
        return 'Meow';
    }
    else {
        animal;
        return 'woof';
    }
}
function getFarmAnimal(animal) {
    switch (animal.kind) {
        case 'pig':
            return 'oink';
        case 'cow':
            return 'mooo';
        case 'rooster':
            return 'cockad';
        default:
            // we should never make it here if we handled all cases correctly 
            const _exhausiveCheck = animal;
            return _exhausiveCheck;
    }
}
/*
exhausiveness checks with never
*/
