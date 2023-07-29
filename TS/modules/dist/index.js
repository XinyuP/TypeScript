import { add, sample as randomSample, pi } from './utils.js';
import UserWhateverNameIsFine, { userHelper } from './User.js';
// UserWhateverNameIsFine holds the default export, act like a container for the default export
// userHelper has to match name unless using "as" to rename it (sample as randomSample)
const sample = 12234233;
console.log(randomSample([12, 3, 34]));
console.log(add(1, 2));
console.log(pi);
userHelper();
UserWhateverNameIsFine;
