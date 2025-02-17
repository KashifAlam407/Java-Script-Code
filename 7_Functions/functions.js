// Functions in JavaScript
function sum(x, y){
    return x+y;
}
console.log(sum(6,9));


// --------------------------
// Function Definition
function Msg(name){
    return ("Hello " + name + " Welcome to Kashif World.");
}
// calling the function
console.log(Msg("Dear!"));



// ---------------------
const square = function (number) {
    return number*number;
}
const x = square(6); // x gets the value of 36
console.log(x)




// ------------------------------
//
function welcome() {
    console.log("Welcome to Kashif World!");
}
welcome();



// -----------------------------
// Function Expression
// 1.
// function expression
let welcome = function() {
    return "Kashif Alam";
}
let ksf = welcome();
console.log(ksf);



// 2.
// function expression
const add = function(a, b){
    console.log(a+b);
}
// calling function
add(4,5);




// 3.
// Function declaration
function person() { }
let person = person();
// Printing the return value of the person() function
console.log(person);

function person1(name) {
    return name;
}
let person1 = person1("Aayush");
// Printing the value of person1
console.log(person1);





// ----------TYPES OF FUNCTIONS------------
// 1. Named functions:
function add(a,b) {
    return a+b;
}
console.log(add(5,4));


// 2. Anonymous function:
let add = function(a,b){
    return a+b;
}
console.log(add(5,4));


// 3. Nested function:
function msg(firstName){
    function hey(){
        console.log("Hey " + firstName);
    }
    return hey();
}
msg("Ravi");


// 4. Immediately invoked function expression:
// The browser executes teh invoked function expression as soon as it detects it. It has the advantage of running instantly where it is situated in the conde and producing direct output.
let message = (function(){
    return "Welcome to Kashif World!";
}) ();
console.log(message);