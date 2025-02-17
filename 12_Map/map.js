// A Map in JavaScript is a collection of key-value pairs where keys can be any data type. Unlike objects, keys in a Map maintain insertion order. 

const company = new Map([
    ["name", "GFG"],
    ["no_of_employee", 200],
    ["category", "education"]
]);
function print(key, values) {
    console.log(values + "=>" + key);
}
company.forEach(print);



