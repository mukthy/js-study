/*
Data Types are 2 types:

1. Primitive Data Types:
Stored directly in the location the variable accesses
stored on the stack

6 primitive data types: */

// Sting
const name = 'John Doe';

// Number
const age = 45;

// Boolean
const hasKids = true;

// Null
const car = null;

// Undefined
let test;

// Symbols (ES6)
const sym = Symbol();

console.log(typeof hasKids);

/*
2. Reference Data Types:
accessed by reference
objects that are stored on the heap.
a pointer to a location in memory.

5 types of Reference Data Types: */

// Arrays
const hobbies = ['movies', 'music'];
// Object Literals
const address = {
    city: 'Boston',
    state: 'MA'
}
// Functions: TBD

// Dates
const today = new Date()
// Anythin Else..
console.log(today)
console.log(typeof hobbies)




