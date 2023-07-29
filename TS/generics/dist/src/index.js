"use strict";
// -------------- built-in generic ----------------- //
// const nums: number[] = [];
const nums = [];
const colors = [];
const inputEl = document.querySelector('#username');
console.dir(inputEl);
inputEl.value = 'Hacked!';
const btn = document.querySelector('.btn');
// ------------- create our own generic ----------- //
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
// wrong:
// function identity(item: any): any {
//     return item;
// }
// we want to return the type same as the type we pass to it
// generic function:
function identity(item) {
    return item;
}
// we can call Type whatever we want
function identity2(item) {
    return item;
}
function identity3(item) {
    return item;
}
function identity4(item) {
    return item;
}
// we established a relationship here --> whatever input type is, it will also be the return type
// I can customize this identity function to work with different types
// It's a generic version that just says some type
identity('blaire'); // automatically know it will return a
identity(true);
identity(7);
identity({ name: 'oreo', breed: 'american short hair' });
// ------------- another generic function ---------------- //
function getRandomElement(list) {
    const randIdx = Math.floor(Math.random() * list.length); // Math.random() returns a number from 0 to <1
    return list[randIdx];
}
console.log(getRandomElement(['a', 'b', 'c']));
// ----------- inferred generic type parameter ------------- //
let x = 23;
getRandomElement(['a', 'b', 'c']);
getRandomElement([1, 2, 3, 4]);
// ------------- generics with multiple types --------------- //
function merge(obj1, obj2) {
    // infer: function merge<T, U>(obj1: T, obj2: U): T & U
    return Object.assign(Object.assign({}, obj1), obj2);
}
const combo = merge({ name: 'blaire' }, { age: 21 });
const combo2 = merge({ name: 'blaire' }, 21);
console.log(combo);
function printDoubleLength(thing) {
    return thing.length * 2;
}
function printDoubleLength2(thing) {
    return thing.length * 2;
}
