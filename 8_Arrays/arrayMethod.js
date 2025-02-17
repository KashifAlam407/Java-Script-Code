// JavaScript array methods are built-in functions that allow efficient manipulation and traversal of arrays. They provide essential funtionalities like adding, removing, and transforming elements, as well as searching, sorting, and iterating through array elements, enhancing code readability and productivity.

let courses = ["HTML", "CSS", "JAVASCRIPT", "REACT"];

// Array length
console.log(courses.length);

// Array toString()
console.log(toString());

// Array join()
console.log(courses.join('|'));



//---------------------------
// Array delete 
let emp = { 
    firstName: "Raj", 
    lastName: "Kumar", 
    salary: 40000 
} 
console.log(delete emp.salary); 
console.log(emp);



//---------------------------
// Array concat() --- it is used to concatenate two or more arrays and it gives the merged array.

// Declare three arrays
let arry1 = [11, 12, 13];
let arry2 = [14, 15, 16];
let arry3 = [17, 18, 19];

let newArr = arry1.concat(arry2, arry3);
console.log(newArr);



// --------------------------
// Array flat() --- it is used to flatten the array i.e. it merges all the given array and reduces all the nesting present in it.

// Creating multilevel array
const arr = [['1', '2'], ['3', '4', '5',['6'], '7']];

// Flat the multilevel array
const flatArr= arr.flat(Infinity);
console.log(flatArr);



// Array.push() --- it is used to add an element at the end of an Array.

let numArr = [10,20,30,40,50];
numArr.push(60);
numArr.push(70,80,90);
console.log(numArr);


let strArr = ["piyush", "gourav", "smruti", "ritu"];
strArr.push("sumit", "amit");
console.log(strArr);

// Array.unshift() --- it is used to add elements to the front of an Array.
numArr.unshift(5,9);
console.log(numArr);

strArr.unshift("kashif", "alam");
console.log(strArr);

// Array.pop() --- it is used to remove elements from the end of an array.
numArr.pop();
console.log(numArr);

// Array.shift() --- it is used to remove elements from the beginning of an array
newArr.shift();
console.log(numArr);

// Array.splice() -- it is used to insert and remove elements at a particular location in an array
numArr.splice(3, 5);
numArr.splice(1,0,3,4,5);
console.log(numArr);




//--------------------------------------
// Array.slice() --- it returns a new array containing a portion of the original array, based on the start and ene idex provided as arguments.
// Original Array
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Case 1: Extract the first 3 elements of the array
const case1 = arr1.slice(0, 3);
console.log("First 3 Array Elements: ", case1);

// Case 2: Extract the last 3 array elements
const case2 = arr1.slice(-3);
console.log("Last 3 Array Elements: ", case2);

// Case 3: Extract elements from middle of array
const case3 = arr1.slice(3, 7);
console.log("Case 3: Extract elements from middle: ", case3);

// Case 4: Start index is greater than end index
const case4 = arr1.slice(5, 2);
console.log("Case 4: Start index is greater than end index: ", case4);

// Case 5: Negative start index
const case5 = arr1.slice(-4, 9);
console.log("Case 5: Negative start index: ", case5);

// Case 6: Negative end index
const case6 = arr1.slice(3, -2);
console.log("Case 6: Negative end index: ", case6);

// Case 7: Only start index is provided
const case7 = arr1.slice(5);
console.log("Case 7: Only start index is provided: ", case7);

// Case 8: Start index and end index are out of range
const case8 = arr1.slice(15, 20);
console.log("Case 8: Start and end index out of range: ", case8);

// Case 9: Start and end index are negative
// and out of range
const case9 = arr1.slice(-15, -10);
console.log("Case 9: Start and end index are negative"
    + " and out of range: ", case9);




// --------------------------------
// Array some() --- it is used to checks if at least one element of the array satisfies the condition implemented by the provided function.
// 1.------------------------------
function isGreaterThan5(element, index, array) {
    return element > 5;
}

// Driver code
// Original array
let array = [2, 5, 8, 1, 4];

// Checking for condition in array
let value = array.some(isGreaterThan5);

console.log(value);

// 2.------------------------------
// JavaScript to illustrate lastIndexOf() method
function isGreaterThan5(element, index, array) {
    return element > 5;
}
function func() {
    // Original array
    let array = [2, 5, 8, 1, 4];

    // Checking for condition in array
    let value = array.some(isGreaterThan5);

    console.log(value);
}
func();


// ---------------------------------
// Array every() --- Check if all elements in teh array satisfy a given condition provided by a function.

// JavaScript code for every() function
function ispositive(element, index, array) {
    return element > 0;
}

function func() {
    let arr = [11, 89, 23, 7, 98];

    // Check for positive number
    let value = arr.every(ispositive);

    console.log(value);
}

func();




//----------------------------------
// Array reduce() --- it is used to reduce the array to a single value and executes a provided function for each value of the arrray (from left to right) and the return value of the function is stored in an accumulator.
let arr3 = [88, 50, 25, 10];

// perform reduce method
let sub = arr3.reduce(geeks);

function geeks(total, num) {
    return total-num;
}
console.log(sub);



// Array map() --- it creates an array by calling a specific function on each element present in teh parent array. It is a non-mutating method. This mehtod iterates over an array and call the function on every element of an array.
let arr4 = [16, 4, 25, 100];

// performing map method
let sub2 = arr4.map(geek);

function geek() {
    return arr4.map(Math.sqrt);
}

console.log(sub2);


// Array flatMap() --- is used to flatten the input array elements into a new array. This method first of all map every element with the help of a mapping function, then flattens the input array element into a new array.

const myAwesomeArray = [
    [1], [2], [3], [4], [5]
];

let geeks = myAwesomeArray.flatMap(
    (arr) => arr * 10
);
console.log(geeks);



// Array reverse() --- it reverse the order of elements in an array.
let arrays = [1, 2, 3, 4, 5];
arrays.reverse();
console.log(arrays);


// Array values() --- it returns a new Array Iterator object that contains the value for each index in the array.

const fruits = ["Apple", "Banana", "Cherry"];

// get the iterator object
const iterator = fruits.values();

// Iterate over the values using the iterator
for (const val of iterator) {
    console.log(val);
}




// Array sort()
// Original array
let numbers = [88, 50, 15, 25, 10];

// Performing sort method
let srt = numbers.sort(geeks);

function geeks(a, b) {
    return a - b;
}

console.log(srt);


// Array include() --- is used to know whether a particular element is present in the array or not and accordingly
// Taking input as an array A having some elements.
let A = [1, 2, 3, 4, 5];

// Include() function is called to test whether the searching element is present in given array or not.
let a = A.includes(2);

// Printing result of function.
console.log(a);



// Array forEach()  ---  calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array.
// Original array
const items = [1, 29, 47];
const copy = [];

items.forEach(function (item) {
    copy.push(item * item);
});

console.log(copy);


// Array.filter() --- it is used to filter out the contents, as per the user specified condition, in the form of a new array.

let oldArray = [1, 2, 3, 4, 5];

console.log(oldArray);

let newArray = oldArray.filter((item)=> item %2=== 0)

console.log(newArray);  