/**
Literal types are not just types - but
the values themselves too!
On it's own, they may not seem useful,
but combine them with unions and you
can have very fine-tuned type options
for Typescript to enforce.

 */

let zero: 0 = 0;
zero = 2; // error: Type '2' is not assignable to type '0'

let hi: 'hi' = 'Hi'; // Type '"Hi"' is not assignable to type '"hi"'

// combine Literal types with Union types
const giveAnswer = (answer: 'yes' | 'no') => {
	return `The answer is ${answer}.`;
};

giveAnswer('no');
giveAnswer('balabala'); //error: Argument of type '"balabala"' is not assignable to parameter of type '"yes" | "no"'

let mood: 'happy' | 'sad' = 'happy';
mood = 'angry'; // error: Type '"angry"' is not assignable to type '"happy" | "sad"'
