// Works for iterable objects such as arrays, strings, maps, sets, and more

// Used for iterating over the values in an iterable (like arrays, strings, etc.).

// Using for-of loop
let arr = [1, 2, 3, 4, 5,7,9];
for (let value of arr) {
    console.log(value);
}



// ----------------------
// Iterating over a map
const m = new Map([
    ["name", "Akash"],
    ["age", 25],
    ["city", "Noida"]
]);

for (let [key, value] of m) {
    console.log(`${key}: ${value}`);
}

//---------------------------
// Iterating over a set
let s = new Set([1, 2, 3, 4, 5]);

for (let val of s) {
    console.log(val);
}


//----------------------------
// Iterating over a object property
let person = {
    name: "Akash",
    age: 25,
    city: "Noida"
};

for (let key of Object.keys(person)) {
    console.log(`${key}: ${person[key]}`);
}
