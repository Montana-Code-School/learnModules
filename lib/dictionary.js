'use strict';

var _stringManipulation = require('./stringManipulation');

var util = _interopRequireWildcard(_stringManipulation);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(util);

// step 1. run the file to look at the util object

// step 2. UNCOMMENT the line below, then execute the compiled file
//util.log('barforama')
// look at how we have use a a modules funciton

// step 3. Create a new function called splitSpace in the stringManipulation module (stringManipulation.js) 
// that splits a string apart by each character, and returns that array of each 
// characters. Uncomment the code below to make it run.

//UNCOMMENT lINE BELOW IN STEP 3
console.log(util.splitSpace('feeling'));

// => output should be ['f', 'e', 'e', 'l', 'i', 'n', 'g']

//Nice work! Your utilizing the module pattern