// Set prototype[@@iterator]()
let n = new Set(["a", "b", "c"]);

let it = n[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());