// Import everything ("*") from the file "mathUtil.js" in
// the same directory calling it "util" in this file ("as util")
import * as util from "./mathUtil";
console.log(util);

// Step 1. run the file to look at the util object

// Step 2. UNCOMMENT the line below, compile and then execute the ./lib/calculations.js file
// console.log(util.multiplyBy11(12));

// => output should be "132"
// look at how we have used a modules function

// Step 3. Create a new function called "sum" in the mathUtil module (mathUtil.js)
// that calculates the sum of two numbers.
// Uncomment the code below, compile and then execute the ./lib/calculations.js file
// console.log(util.sum(27, 62));

// => Output should be "89"

// Nice work! You are utilizing the module pattern

// Step 4. Remove the line which starts with export in the mathUtil module.
// Put the keyword "export" in front of both "const" keywords in the mathUtil module.
// Compile and re-execute the ./lib/calculations.js file

// It still works! Two different ways to accomplish the same thing = JavaScript ;)

// Step 5. Let's just import our new sum function instead of everything to be more efficient.
// Replace the "* as util" with "{ sum }"
// Comment out all console.log's from all previous steps
// Uncomment the code below, compile and then execute the ./lib/calculations.js file
// console.log(sum(27, 62));

// Yay...for being more efficient!

// Step 6. We are not perfectly happy with the function naming in the mathUtil module.
// Let's give it our own local naming!
// Within the curly brackets replace "sum" with "sum as sumOf2Numbers".
// Comment out all console.log's from all previous steps
// Uncomment the code below, compile and then execute the ./lib/calculations.js file
//console.log(sumOf2Numbers(27, 62));

// Excellent Clean Coding :)

// TBD new file import npm installed lib
