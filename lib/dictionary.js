'use strict';

var _stringManiulation = require('./stringManiulation');

var util = _interopRequireWildcard(_stringManiulation);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(util);

// step 1. run the file to look at the util object

// step 2. UNCOMMENT the line below, then execute the compiled file
//util.log('barforama')
// look at how we have use a a modules funciton

// step 3. Create a new function called  in the stringManipulation module that splits a string apart into an array, 
// and returns that array


const d = 'dude';
console.log(d.split(' '));