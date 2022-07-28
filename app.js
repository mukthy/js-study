// alert('Hello World');
// print the output to browser developer console.
// Log to console
console.log(123);
console.log('hello');
console.log(true);
var greeting = 'hello world';
console.log(greeting);
console.log([1, 2, 3, 4]); //Array
console.log({ a: 1, b: 2, c: 3 }); //Object
console.table({ a: 1, b: 2, c: 3 }); //Table

console.error("This is an error"); // log errors
console.clear();
console.warn('This is a warning');
// below block from .time to .timeEnd shows the time it took to execute the block.
console.time('Hello World')
console.log('hello');
console.log('hello');
console.log('hello');
console.log('hello');
console.log('hello');
console.timeEnd('Hello World')


// Variables - var, let, const

var name = 'Hello Mukthy';
console.log(name);

name = 'Hello Viswa'
console.log(name)

//initialize  variable
//console.clear();
var greet;
console.log(greet);
greet = 'hello';
console.log(greet);

// variable can only include letters, numbers, _, $
// and cannot start with a number.

var _name = 'john'

//multi word variables

var firstName = 'John' // camel case
var first_name = 'John' // underscore case
var FirstName = 'John' // pascal case
var firstname = 'John' // conventional case

// let does not allow to re-declare the variables.
let name = 'john';
console.log(name);
name = 'viswa';
console.log(name);

//const cannot be re-assigned.
// have to assign a value.
// we can modify the objects and arrays that are assigned to the consts but cannot re-assign the const variable.
const age = 27
console.log(age)

const person = {
    name: 'viswa',
    age: 30
}

console.log(person);
person.name = 'mukthy';
person.age = 31;
console.log(person);

// modify the array by pushing a number to array.
const number = [1, 2, 3, 4, 5];

console.log(number);
number.push(6);
console.log(number);

