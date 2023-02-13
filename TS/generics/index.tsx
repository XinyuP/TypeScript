// function getRandomElement<T>(list: T[]): T {
// 	const randIdx = Math.floor(Math.random() * list.length); // Math.random() returns a number from 0 to <1
// 	return list[randIdx];
// }

const getRandomElement1 = <T,>(list: T[]): T => {
	const randIdx = Math.floor(Math.random() * list.length); // Math.random() returns a number from 0 to <1
	return list[randIdx];
}

// we need to add , in tsx file