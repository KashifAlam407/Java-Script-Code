// The object literal syntax allows you to define and intialize an objet with curly braces {}, setting properties as key-value pairs.

let obj = {
    name: "Sourav",
    age: 23,
    job: "Developer"
};
console.log(obj);



// -----------------------
// Creation using new object() constructor

let obj2 = new Object();
obj2.name = "Kashif",
obj2.age = 18,
obj2.gender = "Male"

console.log(obj2);



// ---------------------------
let obj3 = {name: "Kashif", age: 18};

// Acessing object properties using Dot Notation
console.log(obj3.name);

// Acessing object properties using Bracket Notation
console.log(obj3["age"]);

// Modifying object properties
obj3.age = 20;
console.log(obj3["age"]);

// Adding properties to an object
obj3.color = "Red"
console.log(obj3["color"])

// Removing properties from an object
delete obj3.color;
console.log(obj3)

// Printing the length of object
console.log(Object.keys(obj3).length);

// Checking if a property exitst
console.log("age" in obj3)  // if present prints true

// you can ckeck if an object has a property using the 'in' operator or 'hasOwnProperty()'
console.log(obj3.hasOwnProperty("name"))

// Iterating through object properties
for (let key in obj3){
    console.log(key + ": " + obj3[key]);
}



//------------------------------------
// Merging Objects
// Objects can be merged using Object.assign() or the spread syntax {...obj1, ...obj2}
let obj4 = {name: "kashif"};
let obj5 = {age: 18};

let obj6 = { ...obj4, ...obj5 };
console.log(obj6);

// Recognizing oa javaScript Object
// To check of a value is an object, use typeof and verify it's not null.
console.log(typeof obj4);
console.log(typeof obj4 === "object" && obj4 !== null);


// ----------------------------------------
// In JavaScript, there are two main ways to create objects
// 1. Using Object Literal Syntax ({}): This is the most common and simple way to create objects
// 2. Using the Object Constructor (new Object()): This uses JavaScript's built-in Object constructor to create objects.
const object1 = {key: "value"};
object1.name = "kashif";   // objects/arrays declared with const can still be mutated

// Object constructor
const object2 = new Object();
object2.key = "value";  // Adding key and value

console.log(object1)
console.log(object2)



