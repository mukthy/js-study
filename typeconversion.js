// Type Conversion, by default it is taking input as string.

let val;

//number to string
val = String(555);
val = String(4 + 4)

//Boolean to String
val = String(true);

// date to string
val = String(new Date());

// Array to String
val = String([1, 2, 3, 4]);

//toString() method
val = (5).toString();
val = (true).toString();

// String to Number
val = Number('555');
val = Number(false);
val = Number(true);
val = Number(null);
val = Number('hello') // gives NaN it means not a number
val = Number([1, 2, 3]) // gives NaN it means not a number

val = parseInt('100.00')
val = parseFloat('100.301')

// output
console.log(val);
console.log(typeof val);
console.log(val.length); // this length can be only used with string.

console.log(val.toFixed(2)) // this method only works with numbers, helps with decimals.

// Type coercion where JS will convert one type to another (Num to String) if we are trying to add one string and one number. Then it will convert the number to string.

const val1 = String(1);
const val2 = 2;
const sum = val1 + val2; // we can convert it to a number here
// const sum = Number(val1 + val2)
console.log(sum);
console.log(typeof sum);