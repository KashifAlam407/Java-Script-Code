// The JavaScript for…in loop iterates over the properties of an object. It allows you to access each key or property name of an object.

// Used for checking if a property or index exists in an object or array (works with the keys).


// Using for-in loop
let myObj = { x: 1, y: 2, z: 3 };
for (let key in myObj) {
    console.log(key, myObj[key]);
}


//-------------------------
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}