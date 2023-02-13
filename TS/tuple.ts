/**
Tuples are a special type exclusive to TypeScript (they don't exist in JS)
Tuples are arrays of fixed lengths and ordered with specific types 
- like super rigid arrays. 
*/

// fixed length
// fixed type
// fixed order

let myTuple: [number, string];

myTuple = [10, 'blaire'];

myTuple = ['blaire', 21]; // error

const color: [number, number, number] = [255, 255, 255, 0];
// Type '[number, number, number, number]' is not assignable to type '[number, number, number]'

// [200, 'OK']
// [404, 'Not Found'];

type HTTPResponse = [number, string];
const goodRes: HTTPResponse = [200, 'OK'];
// goodRes[0] = '200'; // error: Type 'string' is not assignable to type 'number'

/**
 * werid thing:
 * the way tuples have been designed and implemented by TypeScript,
 * they don't prevent you from pushing on extra element after creation
 */
// eg.
goodRes.push(123);
goodRes.pop();
goodRes.pop();
goodRes.pop();
// :(

// array of tuples
const responses: HTTPResponse[] = [[404, "Not Found"], [200, 'OK']];

