// Ternary Operator (?:) --- it is same as if else 

//-------------------------------
let PMarks = 50;
let res = (PMarks > 39) ? "Pass" : "Fail";
console.log(res);


//-------------------------------
// JavaScript to illustrate multiple conditional operators
let marks = 95;
let result = (marks < 40) ? "Unsatisfactory" :
          (marks < 60) ? "Average" :
          (marks < 80) ? "Good" : "Excellent";
console.log(result);


// ------------------------------
// Nested condition
let tMarks = 95;
let tRes = (tMarks > 80) ? (tMarks > 90 ? "Excellent" : "Good") : "Average";
console.log(tRes);