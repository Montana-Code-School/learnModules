// We have to read and manipulate some timestamped date strings we get back from our backend API.
// Rather than reinventing the wheel by creating our own date utility library
// we do what any senior developer does and do a quick Google search to see what
// is already out there...and look here https://momentjs.com/ seems to be just what
// we are looking for!

// Step 1. Let's install this JavaScript library by running the terminal command:
// "npm install moment"

// Great! Now we have a local copy of the Moment.js library as part of our project
// inside the "node_modules/moment" folder

// Step 2. Let's import the Moment.js library into our dates.js file
import moment from "moment";

// Step 3. We got back our desired user object from the backend API and
// now are looking to print their date of birth (DOB) as following:
// "Harold's birth day is September 12th, 1986."
let user48915 = {
  first: "Harold",
  last: "Wagner",
  dob: "1986-09-12"
};

// Parse the birth date using the MomentJS library by uncommeting the next line.
//let dobMoment = moment(user48915.dob);

// Step 4. Use the new moment object and the MonmentJS library format function
// to format the birth date into the desired output as part of the string.
// MomentJS - Display Documentation: https://momentjs.com/docs/#/displaying/
