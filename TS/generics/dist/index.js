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
