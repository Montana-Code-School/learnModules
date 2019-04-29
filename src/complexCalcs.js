// Turns out we need to do more complex calculations than multiplying by 11 and
// summing up two numbers.
// Rather than reinventing the wheel by creating our own math utility library
// we do what any senior developer does and do a quick Google search to see what
// is already out there...and look here https://mathjs.org/ seems to be just what
// we are looking for!

// Step 1. Let's install this JavaScript library by running the terminal command:
// "npm install mathjs"

// Great! Now we have a local copy of the MathJS library as part of our project
// inside the "node_modules" folder

// Step 2. Let's import the MathJS library into our complexCalcs.js file
import * as math from "mathjs";

// Step 3. And now let's use some functions of the MathJS library by uncommeting the next line
// console.log(math.add(21, 37, 43));

// Step 4. Write a function that calculates the length of the hypotenuse on a right triangle
// The input parameters of the function are the lengths of the other two sides.
// Math Refresher: https://en.wikipedia.org/wiki/Pythagorean_theorem
// MathJS Documentation: https://mathjs.org/docs/index.html
