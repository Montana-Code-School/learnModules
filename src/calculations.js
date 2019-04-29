// import everything ("*") from the file "mathUtil.js" in
// the same directory calling it "util" in this file ("as util")
import * as util from "./mathUtil";
console.log(util);

// step 1. run the file to look at the util object

// step 2. UNCOMMENT the line below, then execute the compiled file
//console.log(util.multiplyBy11(12));

// => output should be "132"
// look at how we have used a modules function

// step 3. Create a new function called "sum" in the mathUtil module (mathUtil.js)
// that calculates the sum of two numbers.
// Uncomment the code below to make it run.

//UNCOMMENT lINE BELOW IN STEP 3
//console.log(util.sum(27, 62));

// => output should be "89"

// Nice work! Your utilizing the module pattern

// step 4. Remove the line which starts with export in the mathUtil module.
//TBD EXPORT FOR EVERY VAR
// TBD IMPORT SINGLE FUNCTION { sum } with naming {sum as sumAll}
// TBD NPM INSTALL RANDOM LIBRARY AND USE IT
// TBD EXPORT DEFAULT
