// An array in JavaScript is a data structure used to store multiple values in a single variable. It can hold various data types and allows for dynamic resizing. Elements are accessed by their index, starting from 0.


// CREATE USING LITERALS

// Creating an Empty Array
let a = [];
console.log(a);

// Creating an Array and Initializing with Values
let b = [10, 20, 30];
console.log(b);


// Creating using new Keyword (Constructor)
// Creating and Initializing an array with values
let a1 = new Array(10, 20, 30);

console.log(a1);


//----------------------------------
// Accessing Array Elements
// Creating an Array and Initializing with Values
let a2 = ["HTML", "CSS", "JS"];

// Acessing the first element
console.log(a2[0]); 

let x = a2[1];
console.log(x);

// Accessing Last Array Elements
let lst = a2[a2.length - 1];
console.log(lst);

// Modifying the array elements
a2[1]= "Bootstrap";
console.log(a2);

// Adding elements to the end of the array
a2.push("Node.js")
console.log(a2);

// Adding elements to the beginning of the array
a2.unshift("Web Debelopment")
console.log(a2);

// Removing and returns the last elements
let rem = a2.pop();
console.log(a2);

// Removes and returns the first elements
let fst = a2.shift();
console.log(a2);

// Removes 2 elements starting from index 1
a2.splice(1, 2);
console.log(a2);

// Array Length
let len = a2.length;
console.log(len);

// Increase the Array Length to 7
a2.length = 7;
console.log(a2);

// Decrease the Array Length to 0
a2.length = 0;
console.log(a2);

// Iterating through Array Elements
for (let i = 0; i < a2.length; i++) {
    console.log(a2[i])
}

// Iterating through froEach loop
a2.forEach(function myfunc(x) {
    console.log(x);
})

// Convert array ot String
console.log(a2.toString());

// Check type of array
console.log(typeof a2);




// --------------------------------------
// Array Concatenation
// Creating an Array and Initializing with Values
let a3 = ["HTML", "CSS", "JS", "React"];
let b3 = ["Node.js", "Expess.js"];

// Concatenate both arrays
let concateArray = a3.concat(b3);

console.log("Concatenated Array: ", concateArray);




//-------------------------------
// RECOGNIZING A JAVASCRIPT ARRAY
// 1. By using 'Array.isArray()' method
const courses = ["HTML", "CSS", "JAVASCRIPT"];
console.log("Using Array.isArray() method: ", Array.isArray(courses));


// 2. By using 'instanceof' method
console.log("Using instanceof method: ", courses instanceof Array);




//-------------------------
const a4 = [5];
console.log(a4);  // O/P is 5

const a5 = new Array(5);
console.log(a5);  // O/P is [ <5 empty items> ]

