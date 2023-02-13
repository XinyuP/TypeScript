"use strict";
// document; // TypeScript automatically knows about the document object and its type
const btn = document.getElementById('btn');
console.log(btn);
// add ? here so if btn is null, we don't addEventListener
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => alert('CLICK!'));
// or:
// this is a typescript thing, js doesn't have this
///////// non-null assertion operator  ! /////////
const btnn = document.getElementById('btn');
// ! tell typescript to stop worrying, this is guaranteed not to be null
// a little bit risky though
// we only use ! when we know for sure that a value will be found or that it won't be null
///////// Type assertion /////////
// Sometimes, we might have more specific info about a value's type, and we want to make sure
// TypeScript knows it too --> we can assert a value's type by using the 'as' ketword
// followed by the specific type we want to assert
let mystery = "Hello world!";
// const len = mystery.length  //error: 'mystery' is of type 'unknown'
const len = mystery.length;
