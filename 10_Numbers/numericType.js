// Numeric Type in JavaScript

// 1. The Only Numeric Type
// JavaScript has only one numeric type, which is a double-precision 64-bit binary format IEEE 754 value. This means that all numbers in JavaScript are stored as floating-point numbers, even if they are whole numbers.


// 2. Scientific Notation
// You can represent numbers in scientific notation using the 'e' character, which stands for exponent. For example, 1560000 can be written as 156e5, and 0.00156 can be written as 156e-5.
// This is useful for representing very large or very small numbers in a more compact form.
let a  =  156e5;
let b =   156e-5;
console.log(a);
console.log(b);


// 3. Integer Precision
// JavaScript can accurately represent integers in the range of -2^53 to 2^53 (approximately -9,007,199,254,740,992 to 9,007,199,254,740,992). Beyond this range, precision may be lost due to the limitations of floating-point representation.

let c = 999999999999999;
let d = 9999999999999999;
console.log(c); // 999999999999999
console.log(d); // 10000000000000000 (precision lost)


// 4. Floating-Point Precision
// JavaScript can represent floating-point numbers, but precision may be lost for very small or very large values. For example, 0.1 + 0.2 does not equal 0.3 due to floating-point precision issues.
let e = 0.1 + 0.2;
let f = 0.3;
console.log(e); // 0.30000000000000004 (due to floating-point precision)
console.log(e === f); // false (due to precision issues)
// To handle such cases, you can use methods like toFixed() to round the result to a specific number of decimal places.

