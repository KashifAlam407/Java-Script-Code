// ------------------
const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
    return s.length;
});

console.log("Normal way ", a2); // [8, 6, 7, 9]

const a3 = a.map((s) => s.length);

console.log("Using Arrow Function ", a3); // [8, 6, 7, 9]


// ---------- ARROW FUNCTIONS -----------------

// single lien of code
let add = (a,b) => a+b;
console.log(add(5,6));


// Multiple line of code
const great = (a, b) => {
    if (a>b)
        return "a is greater";
    else 
        return "b is greater";
}
console.log(great(3, 5));


