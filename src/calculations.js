// Import everything ("*") from the file "mathUtil.js" in
// the same directory calling it "util" in this file ("as util")
import * as util from "./mathUtil";
console.log(util);

// Step 1. run the file to look at the util object

// Step 2. UNCOMMENT the line below, compile and then execute the ./lib/calculations.js file
//console.log(util.multiplyBy11(12));

// => output should be "132"
// look at how we have used a modules function

// Step 3. Create a new function called "sum" in the mathUtil module (mathUtil.js)
// that calculates the sum of two numbers.
// Uncomment the code below, compile and then execute the ./lib/calculations.js file
//console.log(util.sum(27, 62));

// => Output should be "89"

// Nice work! You are utilizing the module pattern

// step 4. Remove the line which starts with export in the mathUtil module.
// Put the keyword "export" in front of both "const" keywords in the mathUtil module.
// Compile and re-execute the ./lib/calculations.js file

// It still works! Two different ways to accomplish the same thing = JavaScript ;)

// TBD IMPORT SINGLE FUNCTION { sum } with naming {sum as sumAll}
// TBD NPM INSTALL RANDOM LIBRARY AND USE IT
// TBD EXPORT DEFAULT
