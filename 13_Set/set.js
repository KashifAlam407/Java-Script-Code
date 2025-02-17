// A Set in JavaScript is used to store a unique collection of items, meaning no duplicates are allowed.

// Sets internally use a hash table which makes search, insert and delete operations faster than arrays. Please note that a hash table data structure allows these operations to be performed on average in constant time.
// Set maintains insertion of items. When we access items, we get them in the same order as inserted.
// Only Unique Keys are allowed, if we insert the same key with a different value, it overwrites the previous one.
// A set can be created either empty or by providing an iterable like array or string.

// using an array
let s1 = new Set([10, 30, 30, 40, 40]);
console.log(s1);
let s2 = new Set(["gfg", "gfg", "geeks"]);
console.log(s2);

// using string
let s3 = new Set("fooooooood");
console.log(s3);

// an empty set
let s4 = new Set();
console.log(s4);


// -------------- SET METHOD --------------
// set add()
let x = new Set();

x.add(10);
x.add(30);

// As this method returns the set object hence chaining of add method can be done.
x.add(10).add(20).add(50);

console.log(x);

console.log(x.size);

// Set has()
console.log(x.has(30));




// set delete()
let s = new Set("foooodiiiieeee");

// deleting e from the set it prints true
console.log(s.delete("e"));

console.log(s);

// deleting an element which is not in the set prints false
console.log(s.delete("g"));

// Set clear()
s.clear();
console.log(s);




// Set entries()
let t = new Set();

t.add(10);
t.add(20);
t.add(40);
t.add(5);
t.add(15);
t.add(1);

// direct print
console.log(t.entries())

// using entries to get iterator
let e = t.entries();

// each iterator is array of [value, value]
console.log(e.next().value);
console.log(e.next().value);
console.log(e.next().value);




// Set values()
let m = new Set(['a', 'b', 'c']);
console.log(m.values());

// Set keys()
console.log(m.keys());




// Set forEach()
const myset = new Set([1, 2, 3, 4]);

// usning forEach to iterate over the set
myset.forEach((value) => {
    console.log(value**2);
});



// Set prototype[@@iterator]()
let n = new Set(["a", "b", "c"]);

let it = n[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
