// A javaScript Strings is a sequence of characters, typically used to represent text.


// Creating a String using Literals
// Using single quotes
let s1 = 'kashif';
console.log(s1);

// Using double quotes
let s2 = "kashif";
console.log(s2);


// Creating using constructor
let str = new String("Kashif");
console.log(str)


// Template Literals (String Interpolation)
let str1 = 'Kashif';
let str2 = `You are a good boy ${str1}`;
console.log(str2);

// String Concatination
console.log(str1+ "-" + str2);


// Empty String
let str3 = '';
let str4 = "";
console.log(str3);
console.log(str4);


// Multiline String
let s = `
This is a 
multiline
string`;
console.log(s);

// Finding the length of the string
console.log("String Length: " + s.length);



// -----------------------------------
// Finding substring of a string
let st1 = 'JavaScript Tutorial';
let st2 = "    Kashif is a good boy    ";

// finding substring 
console.log(st1.substring(0, 10));

// to uppercase
console.log(st1.toUpperCase());

// to lowercase
console.log(st1.toLowerCase());

// string search
console.log(st1.indexOf('Tut'));  // prints the first index of 'Tut'

// string replace
console.log(st1.replace("Tutorial", "Project"));

// trimming whitespace from string
console.log(st2.trim());  // removes the whitespace from start and end of the string

// access characters from string
console.log(st1[5]); // prints the character present at 5 index
console.log(st1.charAt(5));

// string comparison
console.log(st1 == st2);
console.log(st1.localeCompare(st2));



// --------------------------------
// Passing JavaScript String as Objects
const strn1 = new String("Md Kashif Alam");
const strn2 = "Md Kashif Alam";

console.log(strn1);
console.log(strn2);

console.log(strn1 == strn2);
console.log(strn1 === strn2); // 'False' since the string created by the new keyword is an object and is not the same as normal strings.

