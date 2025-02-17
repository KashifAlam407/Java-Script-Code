var x = 5;
var x = 15;  // can be changed
console.log(x);

let y = 5;
// let y = 10;  // error since y already been declared
console.log(y);


const z = 5;
// z = 6;  // Error: Assignment to constant variable (but work for object and arrays)
console.log(z);



// Key Differences b/w var, let and const:

// Scope:
// var is function-scoped or globally-scoped.
// let and const are block-scoped.

// Hoisting: 
// var is hoisted and initialized with undefined.
// let and const are hoisted but are in the // Temporal Dead Zone until their declaration.

// Re-declaration:
// var allows re-declaration in the same scope.
// let and const do not allow re-declaration in // the same scope.

// Immutability:
// var and let variables can be reassigned.
// const variables cannot be reassigned (but // objects/arrays declared with const can still // be mutated).

// In modern JavaScript, let and const are generally preferred over var because they provide better scoping and prevent accidental redeclarations or reassignment. Use const for values that shouldn't change and let for values that might need to change.